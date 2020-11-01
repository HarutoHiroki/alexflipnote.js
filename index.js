const https = require('https');
const {URL, URLSearchParams} = require('url');
const endpoints = require('./endpoints.json');
const { isObject } = require('util');
//const fsp = require('fs/promises')
function getContent(url) {
  //const userAgent = new https.Agent({ 'User-Agent': 'AlexFlipnote.js@1.2.5 by HarutoHiroki#4000' })
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const {statusCode} = res;
      if(statusCode !== 200) {
        res.resume();
        reject(`Request failed. Status code: ${statusCode}`);
      }
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => {rawData += chunk});
      res.on('end', () => {
        try {
          if (/^[\],:{}\s]*$/.test(rawData.replace(/\\["\\\/bfnrtu]/g, '@').
          replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
          replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            const parsedData = JSON.parse(rawData);
            resolve(parsedData);
          }
          else {
            resolve(url)
          }
        } catch(e) {
          reject(`Error: ${e.message}`);
        }
      });
    }).on('error', (err) => {
      reject(`Error: ${err.message}`);
    })
  });
}

class AlexClient {
  constructor() {
    let self = this;
    self.image = {};
    self.others = {};
    let baseURL = 'https://api.alexflipnote.dev';
    Object.keys(endpoints.image).forEach(async (endpoint) => {
      self.image[endpoint] = async function (queryParams = '') {
        let url = new URL(`${baseURL}${endpoints.image[endpoint]}`);
        queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        return await getContent(url.toString());
        };
    });
    Object.keys(endpoints.others).forEach( async (endpoint) => {
      self.others[endpoint] = async function (params = '') {
        let url = new URL(`${baseURL}${endpoints.others[endpoint]}`);
        if(endpoints.others[endpoint].includes("color")){
          if(/^[0-9A-F]{6}$/i.test(params.toUpperCase())){
            url = url.toString()+params
            return await getContent(url);
          }else{
            return console.error("Not a valid hex value")
          }
        }
      };
    });
  }
}

module.exports = AlexClient;