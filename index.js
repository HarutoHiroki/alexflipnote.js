const fetch = require('node-fetch');
const {URL, URLSearchParams} = require('url');
const endpoints = require('./endpoints.json');
let version = require("./package.json").version;
async function getContent(url, key) {
  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': key,
        'User-Agent': `AlexFlipnote.js@${version} by HarutoHiroki#4000`
      }
    });
    return res.headers.get("content-type") === "application/json" ? await res.json() : await res.buffer();
  }
  catch (e) {
    return `Error: ${e}`;
  }
}
// boom i contributed, 
class AlexClient {
  constructor(key) {
    this.image = {};
    this.others = {};
    let baseURL = 'https://api.alexflipnote.dev';
    Object.keys(endpoints.image).forEach(async (endpoint) => {
      this.image[endpoint] = async function (queryParams = '') {
          let url = new URL(`${baseURL}${endpoints.image[endpoint]}`);
          queryParams !== '' ? url.search = new URLSearchParams(queryParams) : '';
          return await getContent(url.toString(), key);
        };
    });
    Object.keys(endpoints.others).forEach(async (endpoint) => {
      this.others[endpoint] = async function (params = '') {
        let url = new URL(`${baseURL}${endpoints.others[endpoint]}`);
        if (endpoints.others[endpoint].includes("color")) {
          if (/^[0-9A-F]{6}$/i.test(params.toUpperCase())) {
            url = url.toString() + params
            return await getContent(url, key);
          } else {
            return console.error("Not a valid hex value")
          }
        }
      };
    });
  }
}

module.exports = AlexClient;
