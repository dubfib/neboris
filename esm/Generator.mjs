import { randomBytes } from 'crypto';

export default class Generator {
    constructor() {
        const key = randomBytes(16).toString('hex');
    
        const JSON = {
            "cipher": "aes-256-ctr",
            "key": key
        };

        this.JSON = JSON;
    };

    getCipher() {
        return this.JSON["cipher"];
    };

    getHash() {
        return this.JSON["hash"];
    };

    getKey() {
        return this.JSON["key"];
    };

    getJSON() {
        return this.JSON;
    };
};