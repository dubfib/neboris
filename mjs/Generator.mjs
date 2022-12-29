import { generateKeySync } from 'crypto';

export default class Generator {
    constructor() {
        const key = generateKeySync('aes', { length: 256 });

        this.method = 'aes-256-ctr';
        this.length = key.export().toString('hex').length;
        this.key = key.export().toString('hex');
    };

    getMethod() {
        return this.method;
    };

    getLength() {
        return this.length;
    };

    getKey() {
        return this.key;
    };
};