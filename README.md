# alexflipnote.js [![npm](https://img.shields.io/npm/v/alexflipnote.js.svg)](https://www.npmjs.com/package/alexflipnote.js) [![npm](https://img.shields.io/npm/dt/alexflipnote.js.svg?maxAge=3600)](https://www.npmjs.com/package/alexflipnote.js) [![install size](https://packagephobia.now.sh/badge?p=alexflipnote.js)](https://packagephobia.now.sh/result?p=alexflipnote.js)
A simple AlexFlipnote API Wrapper

[![NPM](https://nodei.co/npm/alexflipnote.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/alexflipnote.js/)

## Installation
```
npm i alexflipnote.js
```

## Recent Updates
Since December 12th 2021, AlexFlipnote's API will no longer be providing image generation endpoints and will only keep random images endpoints.
![Screenshot](https://cdn.discordapp.com/attachments/757283952141664336/919599803560788050/unknown.png)

## Endpoints

### Image
| Function | Params | Description | Type |
| -------- | ------ | ----------- | ---- |
| `birb()` | none | Sends a random birb image | JSON |
| `cats()` | none | Sends a random cat image | JSON |
| `dogs()` | none | Sends a random dog image | JSON |
| `sadcat()` | none | Sends a random sad cat image | JSON |
| `coffee()` | none | Sends a random Coffee image | JSON |

### Others
| Function | Params | Description | Type |
| -------- | ------ | ----------- | ---- |
| `color()` | `hex` | Searches a color from hex code and provide more info | JSON |

`birb/cats/dogs/sadcat/coffee` will return a JSON `{file: "https://api.alexflipnote.dev/cats/zDm8l4maVQg_cats.png"}`

`color` will return a JSON (example: [Color](https://github.com/HarutoHiroki/alexflipnote.js/blob/master/README.md#Color-Example))


## Typings
I added a typings file and will be working to perfect it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.

## Examples
### Cats Example
```js
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');

let link = await alexclient.image.cats();
message.channel.send({files: [{ attachment: link.file }]});

```

### Colorify Example
```js
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');

let url = "https://cdn.discordapp.com/avatars/242263403001937920/37050aab01de8806e4bc1e2b83983439.webp?size=1024";

let link = await alexclient.image.colorify({image: url, c: "00ffd9", b: "000000"});
message.channel.send({files: [{ attachment: link }]});

```

### Color Example
```js
const client = require('alexflipnote.js');
const alexclient = new client('Your-API-Token-Here');
let body = await alexclient.others.color('00ffd9');
message.channel.send(body);

``` 
returns:
```cmd
{
  "blackorwhite_text": "#ffffff", 
  "brightness": 157, 
  "hex": "#00ffd9", 
  "image": "https://api.alexflipnote.dev/color/image/00ffd9", 
  "image_gradient": "https://api.alexflipnote.dev/color/image/gradient/00ffd9", 
  "int": 65497, 
  "name": "Bright Teal", 
  "rgb": "rgb(0, 255, 217)", 
  "rgb_values": {"r": 0, "g": 255, "b": 217}, 
  "shade": ["00ffd9", "00e5c3", "00ccad", "00b297", "009982", "007f6c", "006556", "004c41", "00322b", "001915", "000000"], 
  "tint": ["00ffd9", "19ffdc", "33ffe0", "4cffe4", "66ffe8", "7fffec", "99ffef", "b2fff3", "ccfff7", "e5fffb", "FFFFFF"]
}
```

# Made By
This wrapper is made by HarutoHiroki#4000 on Discord.

For questions and bug reports you can join [my server](https://discord.gg/sjtcnRb) or [AlexFlipnote's server](https://discord.gg/alexflipnote)

Suggestions are welcomed!
