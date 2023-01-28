export = neboris;

declare class neboris {
    constructor(key: string);
    encrypt(content: string): any;
    decrypt(content: string): any;
}