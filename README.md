# isUpNow ?

A Simple **SERVERLESS** Microservice that checks whether a a website is up or not.





 **Inspired By** - [ Hugo.md's MicroUp 🆙](https://github.com/hugomd/micro-up)

 

## API Reference

#### Get Status

```http
  GET /
```

  | Type     | Description                |
  | :------- | :------------------------- |
  | `string` | a valid Url                |

  
### Example Response

```javascript
{"url":"https://google.com","status":"down"}
```



**Example** : https://isUPNow.netlify.com/google.com




## Deployment
You can deploy this Project on Netlify !

To deploy this project run

```bash
  npm run build
```

⚠ Use root diretory as build directory


## Usage Example

```javascript
const url = "https://isUPNow.netlify.com/google.com"

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

