const {
    randomBytes, 
    createCipheriv, 
    createDecipheriv, 
    createHash 
} = require('crypto');

module.exports = class Instance {
    constructor(key) {
        if (typeof key !== 'string' || !key) throw new TypeError('Invalid key provided, must a non-empty string!');
        
        this.cipher = 'aes-256-ctr';
        this.encoding = 'base64';
        this.hash = 'sha512';
        this.key = key;
    };

    encrypt(content) {
        if (typeof content !== 'string' || !content) throw new TypeError('Invalid content provided, must be non-empty string!');
        const iv = randomBytes(16);

        const cipher = createCipheriv(
            this.cipher, 
            createHash(this.hash)
            .update(this.key)
            .digest(this.encoding)
            .slice(0, 32), iv
        );

        return Buffer.concat(
            [ 
                iv, 
                cipher.update(Buffer.from(content)), 
                cipher.final()
            ]
        ).toString(this.encoding);
    };

    decrypt(content) {
        if (typeof content !== 'string' || !content) throw new TypeError('Invalid content provided, must be non-empty string!');

        const input = Buffer.from(
            content, 
            this.encoding
        );

        const decipher = createDecipheriv(
            this.cipher, 
            createHash(this.hash)
            .update(this.key)
            .digest(this.encoding)
            .slice(0, 32),
            input.subarray(0, 16)
        );

        return decipher.update(input.subarray(16)) + decipher.final();
    };
};