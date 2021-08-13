// Interfaces for JSON responses
declare namespace AlexClient {
  export interface AlexError {
    code: number;
    name: string;
    description: string;
  }
  export interface FileResponse {
    file: string;
  }
}

// List all the functions
declare class AlexClient {
  constructor(key: string);

  image: {
    birb(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
    cats(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
    dogs(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
    sadcat(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
    coffee(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
    amiajoke(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    bad(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    joke(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    salty(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    what(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    blur(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    invert(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    bnw(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    flip(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    mirror(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    deepfry(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    pixelate(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    magik(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    jpegify(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    snow(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    gay(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    wide(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    sepia(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    shame(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    communist(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    colorify(object: { image: string, b?: string, c?: string }): Promise<Buffer | AlexClient.AlexError>;
    floor(object: { image: string, text: string }): Promise<Buffer | AlexClient.AlexError>;
    scroll(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    facts(object: { text: string }): Promise<Buffer | AlexClient.AlexError>;
    calling(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    captcha(object: { image: string }): Promise<Buffer | AlexClient.AlexError>;
    achievement(object: { text: string, icon?: number }): Promise<Buffer | AlexClient.AlexError>;
    challenge(object: { text: string, icon?: number }): Promise<Buffer | AlexClient.AlexError>;
    supreme(object: { text: string, dark?: boolean, light?: boolean }): Promise<Buffer | AlexClient.AlexError>;
    didyoumean(object: { top: string, bottom: string }): Promise<Buffer | AlexClient.AlexError>;
    drake(object: { top: string, bottom: string }): Promise<Buffer | AlexClient.AlexError>;
    pornhub(object: { text: string, text2: string }): Promise<Buffer | AlexClient.AlexError>;
    ship(object: { user: string, user2: string }): Promise<Buffer | AlexClient.AlexError>;
    trash(object: { face: string, trash: string }): Promise<Buffer | AlexClient.AlexError>;
  };
  others: {
    fml(): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
    color(hexValue: string): Promise<AlexClient.FileResponse | AlexClient.AlexError>;
  };
}

export = AlexClient;
