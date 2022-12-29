# neboris
A encryption package using `AES-256-CTR` and `SHA512` with random `Initialization Vectors` on the built in `crypto` module. The package creates an `16` byte initialization vector each type the module encrypts text. This module supports `CommonJS, ESM and Typescript`. If you do find any issues, bugs or need help please submit an issue in the github page so I can fix it as soon as possible.

## Install
```shell
npm install neboris
```

## Usage
In this code example the package will call the `Encryption` class and inside of it will use the `Generator` class and encrypt `Hello World!` and decrypt it.

### CommonJS
```js
const { Generator, Encryption } = require('neboris');
const neboris = new Encryption(new Generator().getKey());
const encrypt = neboris.encrypt('Hello World!');
const decrypt = neboris.decrypt(encrypt);
console.log(encrypt, decrypt);
```

### ESM/Typescript
```typescript
import { Generator, Encryption } from 'neboris';
const neboris = new Encryption(new Generator().getKey());
const encrypt = neboris.encrypt('Hello World!');
const decrypt = neboris.decrypt(encrypt);
console.log(encrypt, decrypt);
```

## License
This project is currently under the `MIT` license