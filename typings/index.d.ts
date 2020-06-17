//List all the functions
declare class AlexClient {
  image: {
    birb():Promise<AlexClient.AlexRequestResults>;
    cats():Promise<AlexClient.AlexRequestResults>;
    dogs():Promise<AlexClient.AlexRequestResults>;
    sadcat():Promise<AlexClient.AlexRequestResults>;
    amiajoke(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    bad(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    joke(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    salty(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    blur(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    invert(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    bnW(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    deepfry(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    pixelate(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    magik(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    jpegify(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    snow(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    gay(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    communist(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    colorify(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    floor(opts: AlexClient.AlexImgQueryParams):Promise<AlexClient.AlexResult>;
    scroll(opts: AlexClient.AlexFmlResults):Promise<AlexClient.AlexResult>;
    facts(opts: AlexClient.AlexFmlResults):Promise<AlexClient.AlexResult>;
    calling(opts: AlexClient.AlexFmlResults):Promise<AlexClient.AlexResult>;
    captcha(opts: AlexClient.AlexFmlResults):Promise<AlexClient.AlexResult>;
    fml():Promise<AlexClient.AlexFmlResults>;
    achievement(opts: AlexClient.AlexTxtQueryParams):Promise<AlexClient.AlexResult>;
    challenge(opts: AlexClient.AlexTxtQueryParams):Promise<AlexClient.AlexResult>;
    supreme(opts: AlexClient.AlexTxtQueryParams):Promise<AlexClient.AlexResult>;
    didyoumean(opts: AlexClient.AlexTopBottomText):Promise<AlexClient.AlexResult>;
    drake(opts: AlexClient.AlexTopBottomText):Promise<AlexClient.AlexResult>;
    pornhub(opts: AlexClient.AlexPH):Promise<AlexClient.AlexResult>;
    ship(opts: AlexClient.AlexS):Promise<AlexClient.AlexResult>;
    trash(opts: AlexClient.AlexT):Promise<AlexClient.AlexResult>;
  }
  others: {
    color(opts: AlexClient.AlexColor):Promise<AlexClient.AlexBody>;
    steam(opts: AlexClient.AlexColor):Promise<AlexClient.AlexBody>;
  }
}

export = AlexClient;


declare namespace AlexClient {
  //Help create options interface for the few functions that need it
  export interface AlexImgQueryParams {
    image: string;
    text?: string;
    c?: string;
    b?: string;
  }
  export interface AlexTxtQueryParams {
    text: string;
    icon?: string;
    dark?: string;
    light?: string;
  }
  export interface AlexRequestResults {
    file: string;
  }
  export interface AlexFmlResults {
    text: string;
  }
  export interface AlexBody {
    body: string;
  }
  export interface AlexPH {
    text1: string;
    text2: string;
  }
  export interface AlexS {
    user1: string;
    user2: string;
  }
  export interface AlexT {
    face: string;
    trash: string;
  }
  export interface AlexColor {
    text: string;
  }
  export interface AlexTopBottomText {
    top: string;
    bottom: string;
    ayano?: string;
  }
  export type AlexResult = Buffer 
}