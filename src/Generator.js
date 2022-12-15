const crypto = require('crypto');

module.exports = class Generator {
    constructor() {
        const generatedKey = crypto.generateKeySync('aes', { length: 256 });
        const key = generatedKey.export().toString('hex');
    
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