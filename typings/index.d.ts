//List all the functions
declare class AlexClient {
  image: {
    birb():Promise<JSON>;
    cats():Promise<JSON>;
    dogs():Promise<JSON>;
    sadcat():Promise<JSON>;
    coffee():Promise<JSON>;
  }
  others: {
    color(string: "Hex Value"):Promise<JSON>;
  }
}

export = AlexClient;