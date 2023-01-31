export = neboris;

/**
    * The constructor for neboris that allows you to encrypt and decrypt strings and buffers using aes-256-ctr and hashed with sha512.
    * @params key The key for the encrypt and decrypt functions to use.
*/
declare class neboris {
    constructor(key: string);

    /**
        * Encrypts a string or buffer using aes-256-ctr and hashed with sha512.
        * @param content The string or buffer to encrypt.
        * @returns String | Buffer
    */
    encrypt(content: string | Buffer): string | Buffer;

    /**
        * Decrypts a string of buffer using aes-256-ctr thats hashed with sha512.
        * @param content The string or buffer to decrypt.
        * @returns String | Buffer
    */
    decrypt(content: string | Buffer): string | Buffer;
}