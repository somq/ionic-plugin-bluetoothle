/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

// import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
// import { Observable } from 'rxjs/Observable';

/**
 * @name Bluetooth L E
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BluetoothLE } from '@ionic-native/bluetooth-le';
 *
 *
 * constructor(private bluetoothLE: BluetoothLE) { }
 *
 * ...
 *
 *
 * this.bluetoothLE.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'BluetoothLE',
  plugin: 'cordova-plugin-bluetoothle', // npm package name, example: cordova-plugin-camera
  pluginRef: 'bluetoothle', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/randdusing/cordova-plugin-bluetoothle', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})

@Injectable()
export class BluetoothLE extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  // @Cordova()
  // functionName(arg1: string, arg2: number): Promise<any> {
  //   return; // We add return; here to avoid any IDE / Compiler errors
  // }

  @Cordova({callbackOrder: 'reverse'})
  initialize (params?: {request?: boolean, statusReceiver?: boolean, restoreKey?: string}):

  Promise<{ status: 'enabled' | 'disabled', message?: string }> {
    return;
  }
}
