# neboris
<p>
  <a href="https://www.npmjs.com/package/neboris"><img src="https://img.shields.io/npm/v/neboris?maxAge=3600" alt="NPM version" /></a>
  <a href="https://www.npmjs.com/package/neboris"><img src="https://img.shields.io/npm/dt/neboris?maxAge=3600" alt="NPM downloads" /></a>
</p>

> A package that allows you encrypt and decrypt text and buffers easily, this package uses `aes-256-ctr` and hashes with `sha512` to encrypt and decrypt text and buffers with `Initialization Vectors`.

## Install
This package can be installed with your preferred package manager for [Node.js](https://nodejs.org)
```shell
$ npm install neboris
$ yarn add neboris
$ pnpm add neboris
```

## Benchmark
This package could be a replacement for another package named [aes256](https://npmjs.com/package/aes256) and is faster in benchmarks. Bechmarks are ran using the [benchmark](https://npmjs.com/package/benchmark) package. All the benchmark is doing is that it's encrypting and decrypting `Hello World!` in both text and buffer form using the same key. This benchmark is being ran on a `x86_64 GNU/Linux` machine.

<table>
	<tr>
		<th>Package</th>
		<th>OPS</th>
 	</tr>
 	<tr>
  		<td>aes256</td>
   		<td>20,027</td>
 	</tr>
	<tr>
  		<td>neboris</td>
   		<td>23,204</td>
 	</tr>
 	</tr>
</table>

Want to test it yourself? Go ahead, you can find the script [here](https://github.com/dubfib/neboris/blob/main/test.js).

## Usage
This package can be used in CommonJS, ESM or Typescript. This package only has one single class `Instance` that only has two functions which are `encrypt` and `decrypt`. The `Instance` constructor takes one argument which is a `string` and thats for the key. For both `encrypt` and `decrypt` functions they both take one argument that can be either a `string` or a `buffer`. In this example the package will encrypt `Hello World` in both text and buffer form and decrypt it.
```js
const Instance = require('neboris');
const neboris = new Instance('INSERT_KEY_HERE');

const encryptedText = neboris.encrypt('Hello World!');
const decryptedText = neboris.decrypt(encryptedText);
console.log(encryptedText, decryptedText);

const encryptedBuffer = neboris.encrypt(Buffer.from('Hello World!'));
const decryptedBuffer = neboris.decrypt(encryptedBuffer);
console.log(encryptedBuffer, decryptedBuffer);
```
You can generate a key by using the built in [crypto](https://nodejs.org/api/crypto.html) module.
```js
const { randomBytes } = require('crypto');
console.log(randomBytes(32).toString('hex'));
```

## Notice
This package shouldn't be used to encrypt passwords, you should use [bcrypt](https://npmjs.com/package/bcrypt) instead.

## License
This project is currently under the `MIT` license.
