# alexflipnote.js [![npm](https://img.shields.io/npm/v/alexflipnote.js.svg)](https://www.npmjs.com/package/alexflipnote.js) [![npm](https://img.shields.io/npm/dt/alexflipnote.js.svg?maxAge=3600)](https://www.npmjs.com/package/alexflipnote.js) [![install size](https://packagephobia.now.sh/badge?p=alexflipnote.js)](https://packagephobia.now.sh/result?p=alexflipnote.js)
A simple API Wrapper for AlexFlipnote's API

[![NPM](https://nodei.co/npm/alexflipnote.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/alexflipnote.js/)

## Installation
```
npm i -s alexflipnote.js
```
## Endpoints

### Image
| Function | Params | Description |
| -------- | ------ | ----------- |
| `birb()` | none | Sends a birb image |
| `cats()` | none | Sends a cat image |
| `dogs()` | none | Sends a dog image |
| `sadcat()` | none | Sends a sad cat image |
| `amiajoke()` | `image` | Am I A Joke Meme |
| `bad()` | `image` | Show someone how bad they are |
| `joke()` | `image` | r/wooosh |
| `salty()` | `image` | Sends a salty image filter |
| `blur()` | `image` | Sends a blur image filter |
| `invert()` | `image` | Sends a inverted color image filter |
| `bnw()` | `image` | Sends a black and white image filter |
| `deepfry()` | `image` | Sends a deep fry image filter |
| `pixelate()` | `image` | Sends a pixelated image filter |
| `magik()` | `image` | Sends a magik image filter |
| `jpegify()` | `image` | Turns image into jpeg |
| `snow()` | `image` | Sends a snow image filter |
| `gay()` | `image` | Sends a gay image filter |
| `communist()` | `image` | Sends a communist image filter |
| `colorify()` | `image` `c(optional)` `b(optional)` | Sends a colorify image filter |
| `floor()` | `image` `text` | The floor is lava |
| `scroll()` | `text` | Sends the Scroll of Truth |
| `facts()` | `text` | Sends the facts book |
| `calling()` | `text` | Tom&Jerry Tom calling Meme image |
| `captcha()` | `text` | Sends a Google Captcha image |
| `fml()` | `text` | Sends a F*** my life quote |
| `achievement()` | `text` `icon(optional)` | Sends a Minecraft Achievement image |
| `challenge()` | `text` `icon(optional)` | Sends a Minecraft Challenge image |
| `supreme()` | `text` `dark(optional)` `light(optional)` | Sends a Supreme image |
| `didyoumean()` | `top` `bottom` | Google Did you mean? |
| `drake()` | `top` `bottom` | Drake meme image |
| `pornhub()` | `text1` `text2` | Pornhub Logo image |
| `ship()` | `user1` `user2` | Ships 2 users |
| `trash()` | `face` `trash` | Points out someone is trash |

### Others
| Function | Params | Description |
| -------- | ------ | ----------- |
| `color()` | `hex` | Searches a Color |
| `steam()` | `user` | Find a Steam user |

Params such as:
`image`,`user1`,`user2`,`face`,`trash` requires Discord CDN URLs

`dark`,`light` requires a boolean value formatted as a string (`"true"`,`"false"`)

`icons` requires a number (int) value

`text` requires strings

All endpoints will return a `Link` except birb/cats/dogs/sadcat/color/steam/fml

`birb/cats/dogs/sadcat` will return a JSON `{file: "https://api.alexflipnote.dev/cats/zDm8l4maVQg_cats.png"}`

`color/steam` will return a JSON (example: [Color](https://api.alexflipnote.dev/color/00ffd9) [Steam](https://api.alexflipnote.dev/steam/user/alexflipnote))

`fml` will return a JSON `{"text": "Today, I was running late for school and accidentally ran a red light and got pulled over. I couldn't find the registration and was freaking out, when the cop told me that he wouldn't give me a ticket if he could give me some advice. His advice? Don't wear your shirt inside-out. FML"}`

## Typings
I added a typings file and will be working to perfect it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.

## Examples
Await/Async example
```js
const client = require('alexflipnote.js');
const alexclient = new client();

async function test() {
  console.log(await alexclient.image.cat());
}

test();
```
returns: 
```js
{file: "https://api.alexflipnote.dev/cats/zDm8l4maVQg_cats.png"}
```

Colorify Example
```js
const client = require('alexflipnote.js');
const alexclient = new client();

let url = "https://cdn.discordapp.com/avatars/242263403001937920/37050aab01de8806e4bc1e2b83983439.webp?size=1024"

async function test() {
  console.log(await AlexClient.image.colorify({image: url, c: "00ffd9", b: "000000"}))
}

test()
```
returns: 
```js
"https://api.alexflipnote.dev/colourify?image=https://cdn.discordapp.com/avatars/242263403001937920/37050aab01de8806e4bc1e2b83983439.webp?size=1024&c=00ffd9&b=000000"
```

# Made By
This wrapper is made by HarutoHiroki#4000 on Discord.

For questions and bug reports you can join [my server](https://discord.gg/sjtcnRb) or [AlexFlipnote's server](https://discord.gg/alexflipnote)(recommended)

Suggestions are welcomed!
