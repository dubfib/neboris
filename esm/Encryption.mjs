import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

export default class Encryption {
    constructor(key) {
        this["key"] = key;
    };

    encrypt(text) {
        const iv = randomBytes(16);
        const cipher = createCipheriv('aes-256-ctr', this["key"], iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

        const JSON = { 
            "cipher": "aes-256-ctr",
            "iv": iv.toString('hex'),
            "content": encrypted.toString('hex')
        };

        return JSON;
    };

    decrypt(hash) {
        const decipher = createDecipheriv('aes-256-ctr', this["key"], Buffer.from(hash["iv"], 'hex'));
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