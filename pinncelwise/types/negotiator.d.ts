declare module 'negotiator' {
  interface NegotiatorOptions {
    headers: Record<string, string>;
  }

  class Negotiator {
    constructor(options: NegotiatorOptions);
    languages(): string[];
  }

  export default Negotiator;
}
