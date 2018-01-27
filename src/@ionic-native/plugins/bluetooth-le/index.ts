import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';

// import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

export interface ICharacteristicPath {
  address: string;
  service: string;
  characteristic: string;
}

export interface Params {
  /** The address/identifier provided by the scan's return object */
  address: string;
  /** The service's ID */
  service: string;
}
export interface DescriptorParams extends Params {
  /** The characteristic's ID */
  characteristic: string;
}
export interface WriteCharacteristicParams extends DescriptorParams {
  /* Base64 encoded string */
  value: string;
  /* Set to "noResponse" to enable write without response, all other values will write normally. */
  type?: string;
}

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
 * //@TODO: doc.
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
  install: 'ionic cordova plugin add cordova-plugin-bluetoothle', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})


@Injectable()
export class BluetoothLE extends IonicNativePlugin {

  @Cordova({callbackOrder: 'reverse'})
  initialize(params?: {request?: boolean, statusReceiver?: boolean, restoreKey?: string}):

  Promise<{ status: 'enabled' | 'disabled', message?: string }> {
    return;
  }

  @Cordova({callbackOrder: 'reverse', sync: true})
  enable() {
    return;
  }

  @Cordova({callbackOrder: 'reverse', sync: true})
  disable() {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  getAdapterInfo(): Promise<{
    name: string
    address: string
    isInitialized: boolean
    isEnabled: boolean
    isScanning: boolean
    isDiscoverable: boolean
  }> {
    return;
  }

  @Cordova({callbackOrder: 'reverse', observable: true})
  startScan(params: {
    allowDuplicates?: boolean
    matchNum?: number,
    callbackType?: number,
    scanMode?: number
    services: string[]
    }):

  Observable<{
    status: 'scanResult' | 'scanStarted',
    advertisement?: string | any,
    rssi?: number,
    name?: string,
    address?: string
  }> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  stopScan(): Promise<{status: 'scanStopped'}> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  retrieveConnected(params?: any): Promise<any> {
    return;
  }

  /**
   * bond
   */
  @Cordova({callbackOrder: 'reverse', observable: true})
  bond(params: {address: string, autoConnect?: boolean}): Observable<{
    name: string,
    address: string,
    status: 'bonded' | 'bonding' | 'unbonded'
  }> {
    return;
  }

  /**
   * unbond
   */
  @Cordova({callbackOrder: 'reverse'})
  unbond(params: {address: string}): Promise<{
    name: string,
    address: string,
    status: 'unbonded'
  }> {
    return;
  }

  @Cordova({callbackOrder: 'reverse', observable: true})
  connect(params: {address: string, autoConnect?: boolean}): Observable<{
    name: string,
    address: string,
    status: 'connected' | 'disconnected'
  }> {
    return;
  }

  /**
   * reconnect
   */
  @Cordova({callbackOrder: 'reverse', observable: true})
  reconnect(params: {address: string}): Observable<{
    name: string,
    address: string,
    status: 'connected' | 'disconnected'
  }> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  disconnect(params: {address: string}): Promise<{
    address: string,
    name: string
    status: 'disconnected',
  }> {
    return;
  }

  /**
   * close
   */
  @Cordova({callbackOrder: 'reverse'})
  close(params: {address: string}): Promise<{
    name: string,
    address: string,
    status: string
  }> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  discover(params: {address: string, clearCache?: boolean}): Promise<{
    status: string,
    address: string,
    name: string,
    services: {
      uuid: string,
      characteristics: {
        uuid: string,
        descriptors: any[]
      }[]
    }[]
  }> {
    return;
  }

  /**
   * services (iOS)
   */

  /**
   * characteristics (iOS)
   */

  /**
   * descriptors
   */

  @Cordova({callbackOrder: 'reverse'})
  read(params: ICharacteristicPath): Promise<{value: string, name: string, status: string} & ICharacteristicPath> {
    return;
  }

  @Cordova({callbackOrder: 'reverse', observable: true})
  subscribe(params: ICharacteristicPath): Observable<{status: 'subscribed' | 'subscribedResult', value: string} & ICharacteristicPath> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  unsubscribe(params: any) {
    return;
  }

  /**
   * Note, no callback will occur on write without response on iOS.
   */
  @Cordova({callbackOrder: 'reverse'})
  write(params: WriteCharacteristicParams): Promise<any> {
    return;
  }

  // write(params: ({
  //   value: string,
  //   type?: 'noResponse'
  // } & ICharacteristicPath)): Promise<any> | void {
  //   return;
  // }

  /**
   * writeQ
   */
  @Cordova({callbackOrder: 'reverse'})
  writeQ(params: ({
    value: string,
    type?: 'noResponse'
  } & ICharacteristicPath)): Promise<any> | void {
    return;
  }

  /**
   * readDescriptor
   */

  /**
   * writeDescriptor
   */

  /**
   * rssi
   */

  /**
   * mtu (Android 5+)
   */

  /**
   * requestConnectionPriority (Android 5+)
   */

  /**
   * isInitialized
   */
  @Cordova({callbackOrder: 'reverse'})
  isInitialized(): Promise<{ isInitialized: boolean }> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  isEnabled(): Promise<{ isEnabled: boolean }> {
    return;
  }

  /**
   * isScanning
   */
  @Cordova({callbackOrder: 'reverse'})
  isScanning(): Promise<{ isScanning: boolean }> {
    return;
  }

  /**
   * isBonded (Android)
   */

  /**
   * wasConnected
   */

  /**
   * isConnected
   */

  /**
   * isDiscovered
   */

  @Cordova({callbackOrder: 'reverse'})
  hasPermission(): Promise<{hasPermission: boolean}> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  requestPermission(): Promise<{requestPermission: boolean}> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  isLocationEnabled(): Promise<{isLocationEnabled: boolean}> {
    return;
  }

  @Cordova({callbackOrder: 'reverse'})
  requestLocation(): Promise<{requestLocation: boolean}> {
    return;
  }

  /**
   * initializePeripheral @todo
   */
  @Cordova({callbackOrder: 'reverse'})
  initializePeripheral(params: {request?: boolean, restoreKey: string}): Promise<{
    status: string
    address: string
    service: string
    characteristic: string
    requestId: number
    value: string
    offset: number
    mtu: number
  }> {
    return;
  }

  /**
   * addService @todo
   */
  @Cordova({callbackOrder: 'reverse'})
  addService(params: {service: string, characteristics: {
    uuid: string
    permissions: {
      read: boolean
      write: boolean
      readEncryptionRequired: boolean
      writeEncryptionRequired: boolean,
    }
    properties: {
      read: boolean
      writeWithoutResponse: boolean
      write: boolean
      notify: boolean
      indicate: boolean
      authenticatedSignedWrites: boolean
      notifyEncryptionRequired: boolean
      indicateEncryptionRequired: boolean
    }
  }[]}): Promise<{
    status: string
    service: string
  }> {
    return;
  }

  /**
   * removeService
   */

  /**
   * removeAllServices
   */

  /**
   * startAdvertising @todo
   */
  @Cordova({callbackOrder: 'reverse'})
  startAdvertising(params: {services?: string[], service?: string, name: string}): Promise<{
    status: string
  }> {
    return;
  }
  /**
   * stopAdvertising
   */

  /**
   * respond
   */

  /**
   * notify
   */

  @Cordova({sync: true})
  bytesToEncodedString(bytes: Uint8Array): string {
    return;
  }
  @Cordova({sync: true})
  encodedStringToBytes(str: string): Uint8Array {
    return;
  }

  /**
   * stringToBytes
   */

  /**
   * bytesToString
   */

  @CordovaProperty
  SCAN_MODE_OPPORTUNISTIC: number;
  @CordovaProperty
  SCAN_MODE_LOW_POWER: number;
  @CordovaProperty
  SCAN_MODE_BALANCED: number;
  @CordovaProperty
  SCAN_MODE_LOW_LATENCY: number;
  @CordovaProperty
  MATCH_NUM_ONE_ADVERTISEMENT: number;
  @CordovaProperty
  MATCH_NUM_FEW_ADVERTISEMENT: number;
  @CordovaProperty
  MATCH_NUM_MAX_ADVERTISEMENT: number;
  @CordovaProperty
  MATCH_MODE_AGGRESSIVE: number;
  @CordovaProperty
  MATCH_MODE_STICKY: number;
  @CordovaProperty
  CALLBACK_TYPE_ALL_MATCHES: number;
  @CordovaProperty
  CALLBACK_TYPE_FIRST_MATCH: number;
  @CordovaProperty
  CALLBACK_TYPE_MATCH_LOST: number;


}
