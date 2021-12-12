const fetch = require('node-fetch');
const {URL, URLSearchParams} = require('url');
const endpoints = require('./endpoints.json');
let version = require("./package.json").version;
async function getContent(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': `AlexFlipnote.js@${version} by HarutoHiroki#4000`
      }
    });
    return res.headers.get("content-type") === "application/json" ? await res.json() : await res.buffer();
  }
  catch (e) {
    return `Error: ${e}`;
  }
}

class AlexClient {
  constructor() {
    this.image = {};
    this.others = {};
    let baseURL = 'https://api.alexflipnote.dev';
    Object.keys(endpoints.image).forEach(async (endpoint) => {
      this.image[endpoint] = async function (queryParams = '') {
          if(endpoint.includes("coffee")){
            baseURL = 'https://coffee.alexflipnote.dev'
          }
          let url = new URL(`${baseURL}${endpoints.image[endpoint]}`);
          queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
          return await getContent(url.toString());
        };
    });
    Object.keys(endpoints.others).forEach(async (endpoint) => {
      this.others[endpoint] = async function (params = '') {
        let url = new URL(`${baseURL}${endpoints.others[endpoint]}`);
        if (endpoint.includes("color")) {
          if (/^[0-9A-F]{6}$/i.test(params.toUpperCase())) {
            url = url.toString() + params
            return await getContent(url);
          } else {
            return console.error("Not a valid hex value")
          }
        }else{
          params !== '' ? url.search = new URLSearchParams(params) : '';
          return await getContent(url.toString());
        }
      };
    });
  }
}

module.exports = AlexClient;