/**
 * We will just raw copy /dist/@ionic-native/bluetooth-le to node_modules/@ionic-native/bluetooth-le
 */

var ncp = require('ncp').ncp;

var source = 'node_modules/ionic-plugin-bluetoothle/dist/@ionic-native/bluetooth-le';
var destination = 'node_modules/@ionic-native/bluetooth-le';

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Copied ionic-plugin-bluetooth-le files successfuly');
  console.log('Source:'+ source);
  console.log('Destination:'+ destination);
});

