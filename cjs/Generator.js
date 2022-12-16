const crypto = require('crypto');

module.exports = class Generator {
    constructor() {
        const key = crypto.randomBytes(16).toString('hex');
    
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