# Ionic Native plugin wrapper for cordova-plugin-bluetoothle

# ionic-plugin-bluetoothle
Ionic Native plugin wrapper for cordova-plugin-bluetoothle

> [Ionic Native](https://github.com/ionic-team/ionic-native) plugin wrapper for [cordova-plugin-bluetoothle](https://github.com/randdusing/cordova-plugin-bluetoothle)



## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Development](#development)
* [Versions](#versions)
* [License](#license)


## Install

[npm](https://www.npmjs.com/):

```sh
npm install ionic-plugin-bluetoothle && npm run build
```

[yarn](https://yarnpkg.com/):

```sh
yarn add ionic-plugin-bluetoothle && npm run build
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

---

A full working example can be found in ./example:

```sh
git clone https://github.com/somq/ionic-plugin-bluetoothle-dev.git
cd ionic-plugin-bluetoothle/example
npm i
ionic cordova plugin add cordova-plugin-bluetoothle && 
ionic cordova run android --device -lc
```

## Development

```sh
git clone https://github.com/somq/ionic-plugin-bluetoothle-dev.git
cd ionic-plugin-bluetoothle
```

*edit ./src/@ionic-native/plugins/bluetooth-le/index.ts*

```sh
git clone https://github.com/somq/ionic-plugin-bluetoothle-dev.git
cd ionic-plugin-bluetoothle
```

* Developer guide can be found on the official [Ionic Native documentation](https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md)

## Original doc

You can find the doc on the original plugin repository: 
[randdusing/cordova-plugin-bluetoothle
](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md)

## Versions
Ionic Native version: "4.5.1",

## License

todo