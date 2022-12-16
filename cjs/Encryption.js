const crypto = require('crypto');

module.exports = class Encryption {
    constructor(key) {
        this["key"] = key;
    };

    encrypt(text) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-ctr', this["key"], iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

        const JSON = { 
            "cipher": "aes-256-ctr",
            "iv": iv.toString('hex'),
            "content": encrypted.toString('hex')
        };

        return JSON;
    };

    decrypt(hash) {
        const decipher = crypto.createDecipheriv('aes-256-ctr', this["key"], Buffer.from(hash["iv"], 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash["content"], 'hex')), decipher.final()]);

        const JSON = {
            "cipher": "aes-256-ctr",
            "iv": hash["iv"],
            "encrypted": hash["content"],
            "content": decrpyted.toString()
        };

        return JSON;
    };
};