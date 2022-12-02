/** Interfaces for JSON responses
 * @author D3SOX <https://github.com/D3SOX>
 */
declare namespace AlexClient {
  export interface AlexError {
    code: number;
    name: string;
    description: string;
  }
  export interface FileResponse {
    file: string;
  }
  
  /**
   * @author HarutoHiroki <https://github.com/HarutoHiroki>
   */
  export interface ColorResponse {
    name: string;
    images: {square: string, gradient: string};
    int: number;
    brightness: number;
    safe_text_color: {name: string, hex: string, rgb: {r: number, g: number, b: number, value: Array<number>}};
    hex: {string: string, clean: string, shorten: string, values: Array<string>};
    rgb: {string: string, values: Array<number>, r: number, g: number, b: number};
    hsl: {string: string, values: Array<number>, h: number, s: number, l: number};
    cmyk: {string: string, values: Array<number>, c: number, m: number, y: number, k: number};
    shade: Array<string>;
    tint: Array<string>;
    websafe: {
      name: string;
      images: {square: string, gradient: string};
      int: number;
      brightness: number;
      safe_text_color: {name: string, hex: string, rgb: {r: number, g: number, b: number, value: Array<number>}};
      hex: {string: string, clean: string, shorten: string, values: Array<string>};
      rgb: {string: string, values: Array<number>, r: number, g: number, b: number};
      hsl: {string: string, values: Array<number>, h: number, s: number, l: number};
      cmyk: {string: string, values: Array<number>, c: number, m: number, y: number, k: number};
      shade: Array<string>;
      tint: Array<string>;
    };
  }

  export interface NftResponse {
    hex: string;
    season: string;
    name: string;
    image: string;
  }

  export interface SillycatResponse {
    left: string;
    right: string;
    images: {simple: string, complex: string};
  }
}

/** List all the functions
 * @author HarutoHiroki <https://github.com/HarutoHiroki>
*/
declare class AlexClient {
  achievement(text:string, icon?:number): Promise<ArrayBuffer | AlexClient.AlexError>;
  birb(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
  calling(text:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  captcha(text:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  cats(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
  challenge(text:string,icon?:number): Promise<ArrayBuffer | AlexClient.AlexError>;
  color(string: string): Promise<AlexClient.ColorResponse | AlexClient.AlexError>;
  didyoumean(top:string, bottom:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  dogs(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
  drake(top:string, bottom:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  facts(text:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  nft(seed?:string): Promise<AlexClient.NftResponse | AlexClient.AlexError>;
  nft(hex:string, season?:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  ph(text:string,text2:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  sadcat(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
  scroll(text:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  sillycat(seed?:string): Promise<AlexClient.SillycatResponse | AlexClient.AlexError>;
  sillycat(hex: string, hex2:string): Promise<ArrayBuffer | AlexClient.AlexError>;
  coffee(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
}

export = AlexClient;