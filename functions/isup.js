import fetch from 'node-fetch';

exports.handler = async (event) => {
  const site = event.path.split('/').pop(); // Extract the site URL from the API endpoint
  const url = `https://${site}`; // Construct the site URL

  try {
    // Try making a request using HTTPS
    const response = await fetch(url);
    if (response.ok) {
      // If the site is up, return a JSON object with a "status" property set to "up"
      return {
        statusCode: 200,
        body: JSON.stringify({ url : `${url}`, status: 'up' })
      };
    }
  } catch (error) {
    // If an error occurs, try making a request using HTTP instead
    try {
      const httpUrl = `http://${site}`; // Construct the HTTP site URL
      const response = await fetch(httpUrl);
      if (response.ok) {
        // If the site is up, return a JSON object with a "status" property set to "up"
        return {
          statusCode: 200,
          body: JSON.stringify({ url : `${url}`, status: 'up' })
        };
      }
    } catch (error) {
      // If both HTTPS and HTTP requests fail, return a JSON object with a "status" property set to "down"
      return {
        statusCode: 200,
        body: JSON.stringify({ url : `${url}`, status: 'down' })
      };
    }
  }
};

