# Ionic Native plugin wrapper for cordova-plugin-bluetoothle

# ionic-plugin-bluetoothle
Ionic Native plugin wrapper for cordova-plugin-bluetoothle

> [Ionic Native](https://github.com/ionic-team/ionic-native) plugin wrapper for [cordova-plugin-bluetoothle](https://github.com/randdusing/cordova-plugin-bluetoothle)



## Table of Contents

* [Install](#install)
* [Install from scratch](#install-from-scratch)
* [Usage](#usage)
* [Troubleshoot](#troubleshoot)
* [Development](#development)
* [Versions](#versions)
* [License](#license)


## Install

[npm](https://www.npmjs.com/):

```sh
npm install ionic-plugin-bluetoothle --save && node node_modules\ionic-plugin-bluetoothle\install.js
```

[yarn](https://yarnpkg.com/):

```sh
yarn add ionic-plugin-bluetoothle && node node_modules\ionic-plugin-bluetoothle\install.js
```


## Install from scratch


```sh
ionic start ionic-bluetoothle blank

cd ionic-bluetoothle

npm install ionic-plugin-bluetoothle --save && node node_modules\ionic-plugin-bluetoothle\install.js

ionic cordova plugin add cordova-plugin-bluetoothle
```

Edit the files like explained in the [usage](https://github.com/somq/ionic-plugin-bluetoothle#usage) section

```sh
ionic cordova run android --device -lc
```



## Usage

app.module.ts
```js

import { BluetoothLE } from '@ionic-native/bluetooth-le';

@NgModule({
  ...
  providers: [
    ...
    BluetoothLE
  ]
})

```

home.ts
```js

import { BluetoothLE } from '@ionic-native/bluetooth-le';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public bluetoothle: BluetoothLE) {

    bluetoothle.initialize().then(ble => {
      console.log('ble', ble.status) // logs 'enabled'
    });

  }


```

Informations about methods can be found on the original plugin repository: 
[randdusing/cordova-plugin-bluetoothle
](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md)

## Troubleshoot

```sh
Cannot find module '@ionic-native/bluetooth-le'.
```

run this cmd to re-copy the file to the node_modules/@ionic-native folder
```sh
node node_modules\ionic-plugin-bluetoothle\install.js
```


## Development

Take a look at the [development repository](https://github.com/somq/ionic-plugin-bluetoothle-dev)

## Original doc

You can find the doc on the original plugin repository: 
[randdusing/cordova-plugin-bluetoothle
](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md)

## Versions

Known versions @ this development stage:

* Ionic version: "4.5.1"
* Ionic Native version: "3.9.2"
* cordova-plugin-bluetoothle: "4.4.3"


## License

MIT