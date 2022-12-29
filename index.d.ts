/**
 @class Generator class that helps users generate values for the encryption function
*/
export class Generator {
    /**
	 @constructor Generator constructor that generates necessary values for encryption
     * ```js
     * import { Generator } from 'noris';
     * const noris = new Generator();
     * console.log(noris);
     * ```
	*/
    constructor();

    /**
	 @function Returns a AES-256 key (32 bytes)
     * ```js
     * import { Generator } from 'noris';
     * const noris = new Generator();
     * console.log(noris.getKey());
     * ```
     @returns {String} Key of a AES-256 key (32 bytes)
	*/
    getKey(): string;

    /**
	 @function Returns the length of the key
     * ```js
     * import { Generator } from 'noris';
     * const noris = new Generator();
     * console.log(noris.getLength());
     * ```
     @returns {Number} Length of the key in a number
	*/
    getLength(): number;

    /**
	 @function Returns the method that is being used
     * ```js
     * import { Generator } from 'noris';
     * const noris = new Generator();
     * console.log(noris.getMethod());
     * ```
     @returns {String} Method in text as a string
	*/
    getMethod(): string;
}

/**
 @class Encryption class that allows users to encrypt text (string)
*/
export class Encryption {
    /**
	 @constructor Encryption constructor that allows you to encrypt text (string)
     @param {String} key A 32 byte/256 bit key that can be used for AES-256 encryption, you can generate it in the Generate class
     * ```js
     * import { Encryption } from 'noris';
     * const noris = new Encryption('key');
     * ```
	*/
    constructor(key: string);

    /**
     @function Decrypt function that allows you to decrypt text thats already encrypted
     @param {String} encryptedText A encrypted string that this function can decrypt if the key is the same when encrypting in the constructor
     * ```js
     * import { Encryption } from 'noris';
     * const noris = new Encryption('key');
     * const decrypt = noris.decrypt('encryptedText');
     * console.log(decrypt);
     * ```
     @returns {String} A decrypted text that is decrypted with key in the constructor
    */
    decrypt(encryptedText: string): string;

    /**
     @function Encrypt function that allows you to encrypt text and decrypt it later
     @param {String} decryptedText A text that can be encrypted and can be decrypted later
     * ```js
     * import { Encryption } from 'noris';
     * const noris = new Encryption('key');
     * const encrypt = noris.encrypt('Hello World!');
     * console.log(encrypt);
     * ```
     @returns {String} A encrypted string that can be decrypted later using the decrypt function
    */
    encrypt(decryptedText: string): string;
}