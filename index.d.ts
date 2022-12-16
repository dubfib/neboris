export class Generator {
    constructor(...args: any[]);
    getCipher(...args: any[]): void;
    getHash(...args: any[]): void;
    getJSON(...args: any[]): void;
    getKey(...args: any[]): void;
}

export class Encryption {
    constructor(...args: any[]);
    decrypt(...args: any[]): void;
    encrypt(...args: any[]): void;
}