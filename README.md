# alexflipnote.js [![npm](https://img.shields.io/npm/v/alexflipnote.js.svg)](https://www.npmjs.com/package/alexflipnote.js) [![npm](https://img.shields.io/npm/dt/alexflipnote.js.svg?maxAge=3600)](https://www.npmjs.com/package/alexflipnote.js) [![install size](https://packagephobia.now.sh/badge?p=alexflipnote.js)](https://packagephobia.now.sh/result?p=alexflipnote.js)
A simple AlexFlipnote API Wrapper

[![NPM](https://nodei.co/npm/alexflipnote.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/alexflipnote.js/)

## Installation
```
npm i alexflipnote.js
```

## Recent Updates
Good news: AlexFlipnote has returned some of the endpoints back and this module has been updated accordingly
![Screenshot](https://cdn.discordapp.com/attachments/823121881762758706/1048038151823839242/image.png)

## Endpoints

| Function        | Params                    | Description                                          |
| --------------- | ------------------------- | ---------------------------------------------------- |
| `achievement()` | `text`, `icon` (optional) | Sends a Minecraft achievement image                  |
| `birb()`        | none                      | Sends a random birb image                            |
| `calling()`     | `text`                    | Sends a Tom calling image                            |
| `captcha()`     | `text`                    | Sends a Google captcha image                         |
| `cats()`        | none                      | Sends a random cat image                             |
| `challenge()`   | `text`, `icon` (optional) | Sends a Minecraft challenge image                    |
| `color()`       | `string`                  | Searches a color from hex code and provide more info |
| `didyoumean?()` | `top`, `bottom`           | Sends a "Did you mean" Google image                  |
| `dogs()`        | none                      | Sends a random dog image                             |
| `drake()`       | `top`, `bottom`           | Sends a Drake yes no image                           |
| `facts()`       | `text`                    | Sends a facts book image                             |
| `ph()`          | `text`, `text2`           | Sends a pornhub logo format image                    |
| `sadcat()`      | none                      | Sends a random sad cat image                         |
| `scroll()`      | `text`                    | Sends a scroll of truth image                        |
| `coffee()`      | none                      | Sends a random Coffee image                          |

`birb/cats/dogs/sadcat/coffee` will return `{file: "https://api.alexflipnote.dev/cats/zDm8l4maVQg_cats.png"}`

`color` returns (example: https://api.alexflipnote.dev/color/00ffd9)

Other methods not listed above will return an image buffer.


## Typings
I added a typings file and will be working to perfect it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.

## Examples
### Cats Example
```js
const client = require('alexflipnote.js');
const alexClient = new client();
let link = await alexClient.cats();
let image = new MessageAttachment(link.file, { name: "image.png" });
channel.send({files: [image]});
```

### Color Example
```js
const client = require('alexflipnote.js');
const alexClient = new client();
let body = await alexClient.color('00ffd9');
console.log(body);
```


### Utilisation of Buffers in Embeds in Discord.js v14 Example
```js
const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const client = require('alexflipnote.js');
const alexClient = new client();

let buffer = alexClient.challenge({"balls", 1});
let file = new AttachmentBuilder(buffer, { name: 'image.png' });

const embed = new EmbedBuilder()
	.setTitle('Nice Image')
	.setImage('attachment://image.png');

channel.send({ embeds: [embed], files: [file] });
```

# Made By
This wrapper is made by HarutoHiroki#4000 on Discord.

For questions and bug reports you can join my [Discord server](https://discord.gg/sjtcnRb) or [AlexFlipnote's server](https://discord.gg/alexflipnote)

Suggestions are welcomed!
