# neboris
A package that allows you encrypt and decrypt text easily, this package uses `aes-256-ctr` to encrypt and decrypt text with `Initialization Vectors`.

## Benchmark
This package could be a replacement for another package named [aes256](https://npmjs.com/package/aes256) and is faster in benchmarks. Bechmarks are ran using the [benchmark](https://npmjs.com/package/benchmark) package.

<table>
	<tr>
		<th>Package</th>
		<th>OPS</th>
 	</tr>
 	<tr>
  		<td>aes256</td>
   		<td>36,109</td>
 	</tr>
	<tr>
  		<td>neboris</td>
   		<td>43,802</td>
 	</tr>
 	</tr>
</table>

Want to test it yourself? Go ahead, you can find the script [here](https://github.com/dubfib/neboris/blob/main/test.js).

## Usage
In this example the package will encrypt `Hello World` and decrypt it.
```js
const Instance = require('neboris');
const neboris = new Instance('INSERT_KEY_HERE');
const encrypt = neboris.encrypt('Hello World!');
const decrypt = neboris.decrypt(encrypt);
console.log(encrypt, decrypt);
```
You can generate a key by using the built in [crypto](https://nodejs.org/api/crypto.html) module.
```js
const { randomBytes } = require('crypto');
console.log(randomBytes(32));
```

## License
This project is currently under the `MIT` license.
