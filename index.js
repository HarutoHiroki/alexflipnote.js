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
    let self = this;
    let baseURL = 'https://api.alexflipnote.dev';
    Object.keys(endpoints).forEach(async (endpoint) => {
      self[endpoint] = async function (queryParams = '') {
        if(endpoint.includes("coffee")){
          baseURL = 'https://coffee.alexflipnote.dev';
        }
        let url = new URL(`${baseURL}${endpoints[endpoint]}`);
        if (endpoint.includes("color")) {
          url = url.toString() + queryParams;
        } else if (endpoint.includes("nft")) {
          if (queryParams.hex) {
            url = `${url}/${queryParams.hex}${queryParams.season ? `/${queryParams.season}` : ''}`;
          } else {
            queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
          } 
        } else if (endpoint.includes("sillycat")) {
          if (queryParams.hex) {
            url = `${url}/${queryParams.hex}${queryParams.hex2 ? `/${queryParams.hex2}` : ''}`;
          } else {
            queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
          } 
        } else {
          queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
        }
        return await getContent(url.toString());
      };
    });
  }
}

module.exports = AlexClient;