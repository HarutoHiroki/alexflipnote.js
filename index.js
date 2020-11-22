const request = require('request');
const {URL, URLSearchParams} = require('url');
const endpoints = require('./endpoints.json');
function getContent(url, key) {
  return new Promise((resolve, reject) => {
    request({
      headers:{
        'Authorization': key,
        'User-Agent': 'AlexFlipnote.js@2.0.0 by HarutoHiroki#4000' 
      },
      url: url,
      method: 'GET',
      encoding: null
    }, function (err, res, body) {
      if(err) reject(`Error: ${err}`);
      try {	
        if (Buffer.isBuffer(body)) {
          resolve(Buffer.from(body))
        }	else if (/^[\],:{}\s]*$/.test(body.replace(/\\["\\\/bfnrtu]/g, '@').	
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').	
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {	
          const parsedData = JSON.parse(body);	
          resolve(parsedData);	
        } else {
          reject(`ERROR! \nPlease come to discord.gg/sjtcnRb to report this error to HarutoHiroki#4000`)
        }
      } catch(e) {	
        reject(`Error: ${e.message}`);	
      }
    })
  })
}

class AlexClient {
  constructor(key) {
    let self = this;
    self.image = {};
    self.others = {};
    let baseURL = 'https://api.alexflipnote.dev';
    Object.keys(endpoints.image).forEach(async (endpoint) => {
      self.image[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.image[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString(), key);
        };
    });
    Object.keys(endpoints.others).forEach( async (endpoint) => {
      self.others[endpoint] = async function (params = '') {
        let url = new URL(`${baseURL}${endpoints.others[endpoint]}`);
        if(endpoints.others[endpoint].includes("color")){
          if(/^[0-9A-F]{6}$/i.test(params.toUpperCase())){
            url = url.toString()+params
            return await getContent(url, key);
          }else{
            return console.error("Not a valid hex value")
          }
        }
      };
    });
  }
}

module.exports = AlexClient;