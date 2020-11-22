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
      method: 'GET'
    }, function (err, res, body) {
      if(err) reject(`Error: ${err}`);
      resolve(JSON.parse(res.body));
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