var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export var BluetoothScanMode;
(function (BluetoothScanMode) {
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_OPPORTUNISTIC"] = -1] = "SCAN_MODE_OPPORTUNISTIC";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_LOW_POWER"] = 0] = "SCAN_MODE_LOW_POWER";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_BALANCED"] = 1] = "SCAN_MODE_BALANCED";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_LOW_LATENCY"] = 2] = "SCAN_MODE_LOW_LATENCY";
})(BluetoothScanMode || (BluetoothScanMode = {}));
export var BluetoothMatchMode;
(function (BluetoothMatchMode) {
    BluetoothMatchMode[BluetoothMatchMode["MATCH_MODE_AGRESSIVE"] = 1] = "MATCH_MODE_AGRESSIVE";
    BluetoothMatchMode[BluetoothMatchMode["MATCH_MODE_STICKY"] = 2] = "MATCH_MODE_STICKY";
})(BluetoothMatchMode || (BluetoothMatchMode = {}));
export var BluetoothMatchNum;
(function (BluetoothMatchNum) {
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_ONE_ADVERTISEMENT"] = 1] = "MATCH_NUM_ONE_ADVERTISEMENT";
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_FEW_ADVERTISEMENT"] = 2] = "MATCH_NUM_FEW_ADVERTISEMENT";
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_MAX_ADVERTISEMENT"] = 3] = "MATCH_NUM_MAX_ADVERTISEMENT";
})(BluetoothMatchNum || (BluetoothMatchNum = {}));
export var BluetoothCallbackType;
(function (BluetoothCallbackType) {
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_ALL_MATCHES"] = 1] = "CALLBACK_TYPE_ALL_MATCHES";
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_FIRST_MATCH"] = 2] = "CALLBACK_TYPE_FIRST_MATCH";
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_MATCH_LOST"] = 4] = "CALLBACK_TYPE_MATCH_LOST";
})(BluetoothCallbackType || (BluetoothCallbackType = {}));
/**
 * @name BluetoothLE
 * @description
 * This plugin has the most complete implementation for interacting with Bluetooth LE devices on Android, iOS and partially Windows.
 * It's a wrap around [randdusing/cordova-plugin-bluetoothle](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md) cordova plugin for Ionic.
 * It supports peripheral **and** central modes and covers most of the API methods available on Android and iOS.
 *
 * @usage
 * ```typescript
 * import { BluetoothLE } from '@ionic-native/bluetooth-le';
 *
 *
 * constructor(public bluetoothle: BluetoothLE, public plt: Platform) {
 *
 *  this.plt.ready().then((readySource) => {
 *
 *    console.log('Platform ready from', readySource);
 *
 *    this.bluetoothle.initialize().then(ble => {
 *      console.log('ble', ble.status) // logs 'enabled'
 *    });
 *
 *   });
 * }
 *
 * ```
 *
 */
var BluetoothLE = (function (_super) {
    __extends(BluetoothLE, _super);
    function BluetoothLE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @name initialize
     * @description Initialize Bluetooth on the device
     * @param {InitParams} [params]
     * @returns {(Promise<{ status: 'enabled' | 'disabled'}>)} The callback that is passed initialize status (enabled/disabled)
     */
    /**
       * @name initialize
       * @description Initialize Bluetooth on the device
       * @param {InitParams} [params]
       * @returns {(Promise<{ status: 'enabled' | 'disabled'}>)} The callback that is passed initialize status (enabled/disabled)
       */
    BluetoothLE.prototype.initialize = /**
       * @name initialize
       * @description Initialize Bluetooth on the device
       * @param {InitParams} [params]
       * @returns {(Promise<{ status: 'enabled' | 'disabled'}>)} The callback that is passed initialize status (enabled/disabled)
       */
    function (params) {
        return;
    };
    /**
     * @name enable (Android)
     * @description Enable Bluetooth on the device. Android support only
     * @returns {Promise<{ status: boolean }>}
     */
    /**
       * @name enable (Android)
       * @description Enable Bluetooth on the device. Android support only
       * @returns {Promise<{ status: boolean }>}
       */
    BluetoothLE.prototype.enable = /**
       * @name enable (Android)
       * @description Enable Bluetooth on the device. Android support only
       * @returns {Promise<{ status: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name disable (Android)
     * @description Disable Bluetooth on the device. Android support only
     * @returns void
     */
    /**
       * @name disable (Android)
       * @description Disable Bluetooth on the device. Android support only
       * @returns void
       */
    BluetoothLE.prototype.disable = /**
       * @name disable (Android)
       * @description Disable Bluetooth on the device. Android support only
       * @returns void
       */
    function () {
        return;
    };
    /**
     * @name getAdapterInfo (Android)
     * @description @todo
     * @returns {Promise<{ name: string, address: string, isInitialized: boolean, isEnabled: boolean, isScanning: boolean, isDiscoverable: boolean}>}
     */
    /**
       * @name getAdapterInfo (Android)
       * @description @todo
       * @returns {Promise<{ name: string, address: string, isInitialized: boolean, isEnabled: boolean, isScanning: boolean, isDiscoverable: boolean}>}
       */
    BluetoothLE.prototype.getAdapterInfo = /**
       * @name getAdapterInfo (Android)
       * @description @todo
       * @returns {Promise<{ name: string, address: string, isInitialized: boolean, isEnabled: boolean, isScanning: boolean, isDiscoverable: boolean}>}
       */
    function () {
        return;
    };
    /**
     * @name startScan
     * @description Scan for Bluetooth LE devices.
     * Since scanning is expensive, stop as soon as possible. The Cordova app should use a timer to limit the scan interval.
     * Android API >= 23 requires ACCESS_COARSE_LOCATION permissions to find unpaired devices.
     * Permissions can be requested by using the hasPermission and requestPermission functions.
     * Android API >= 23 also requires location services to be enabled. Use isLocationEnabled to determine whether location services are enabled.
     * If not enabled, use requestLocation to prompt the location services settings page.
     * @param params Scan params
     * @returns {(Observable<{ status: ScanStatus }>)}
     */
    /**
       * @name startScan
       * @description Scan for Bluetooth LE devices.
       * Since scanning is expensive, stop as soon as possible. The Cordova app should use a timer to limit the scan interval.
       * Android API >= 23 requires ACCESS_COARSE_LOCATION permissions to find unpaired devices.
       * Permissions can be requested by using the hasPermission and requestPermission functions.
       * Android API >= 23 also requires location services to be enabled. Use isLocationEnabled to determine whether location services are enabled.
       * If not enabled, use requestLocation to prompt the location services settings page.
       * @param params Scan params
       * @returns {(Observable<{ status: ScanStatus }>)}
       */
    BluetoothLE.prototype.startScan = /**
       * @name startScan
       * @description Scan for Bluetooth LE devices.
       * Since scanning is expensive, stop as soon as possible. The Cordova app should use a timer to limit the scan interval.
       * Android API >= 23 requires ACCESS_COARSE_LOCATION permissions to find unpaired devices.
       * Permissions can be requested by using the hasPermission and requestPermission functions.
       * Android API >= 23 also requires location services to be enabled. Use isLocationEnabled to determine whether location services are enabled.
       * If not enabled, use requestLocation to prompt the location services settings page.
       * @param params Scan params
       * @returns {(Observable<{ status: ScanStatus }>)}
       */
    function (params) {
        return;
    };
    /**
     * @name stopScan
     * @description Stop scan for Bluetooth LE devices. Since scanning is expensive, stop as soon as possible
     * The app should use a timer to limit the scanning time.
     * @returns {Promise<{status: 'scanStopped'}>}
     */
    /**
       * @name stopScan
       * @description Stop scan for Bluetooth LE devices. Since scanning is expensive, stop as soon as possible
       * The app should use a timer to limit the scanning time.
       * @returns {Promise<{status: 'scanStopped'}>}
       */
    BluetoothLE.prototype.stopScan = /**
       * @name stopScan
       * @description Stop scan for Bluetooth LE devices. Since scanning is expensive, stop as soon as possible
       * The app should use a timer to limit the scanning time.
       * @returns {Promise<{status: 'scanStopped'}>}
       */
    function () {
        return;
    };
    /**
     * @name retrieveConnected
     * @description Retrieved paired Bluetooth LE devices. In iOS, devices that are "paired" to will not return during a normal scan.
     * Callback is "instant" compared to a scan.
     * @param {{ services: string[] }} An array of service IDs to filter the retrieval by. If no service IDs are specified, no devices will be returned.
     * @returns {Promise<{ devices: DeviceInfo[] }>}
     */
    /**
       * @name retrieveConnected
       * @description Retrieved paired Bluetooth LE devices. In iOS, devices that are "paired" to will not return during a normal scan.
       * Callback is "instant" compared to a scan.
       * @param {{ services: string[] }} An array of service IDs to filter the retrieval by. If no service IDs are specified, no devices will be returned.
       * @returns {Promise<{ devices: DeviceInfo[] }>}
       */
    BluetoothLE.prototype.retrieveConnected = /**
       * @name retrieveConnected
       * @description Retrieved paired Bluetooth LE devices. In iOS, devices that are "paired" to will not return during a normal scan.
       * Callback is "instant" compared to a scan.
       * @param {{ services: string[] }} An array of service IDs to filter the retrieval by. If no service IDs are specified, no devices will be returned.
       * @returns {Promise<{ devices: DeviceInfo[] }>}
       */
    function (params) {
        return;
    };
    /**
     * @name bond (Android)
     * @description Bond with a device.
     * The device doesn't need to be connected to initiate bonding. Android support only.
     * @param {{ address: string }} params The address/identifier provided by the scan's return object
     * @returns {(Observable<{ status: DeviceInfo }>)}
     * success:
     *    The first success callback should always return with status == bonding.
     *    If the bond is created, the callback will return again with status == bonded.
     *    If the bonding popup is canceled or the wrong code is entered, the callback will return again with status == unbonded.
     * error:
     *    The callback that will be triggered when the bond operation fails
     */
    /**
       * @name bond (Android)
       * @description Bond with a device.
       * The device doesn't need to be connected to initiate bonding. Android support only.
       * @param {{ address: string }} params The address/identifier provided by the scan's return object
       * @returns {(Observable<{ status: DeviceInfo }>)}
       * success:
       *    The first success callback should always return with status == bonding.
       *    If the bond is created, the callback will return again with status == bonded.
       *    If the bonding popup is canceled or the wrong code is entered, the callback will return again with status == unbonded.
       * error:
       *    The callback that will be triggered when the bond operation fails
       */
    BluetoothLE.prototype.bond = /**
       * @name bond (Android)
       * @description Bond with a device.
       * The device doesn't need to be connected to initiate bonding. Android support only.
       * @param {{ address: string }} params The address/identifier provided by the scan's return object
       * @returns {(Observable<{ status: DeviceInfo }>)}
       * success:
       *    The first success callback should always return with status == bonding.
       *    If the bond is created, the callback will return again with status == bonded.
       *    If the bonding popup is canceled or the wrong code is entered, the callback will return again with status == unbonded.
       * error:
       *    The callback that will be triggered when the bond operation fails
       */
    function (params) {
        return;
    };
    /**
     * @name unbond (Android)
     * @description Unbond with a device. The device doesn't need to be connected to initiate bonding. Android support only.
     * @param {{address: string}} params The address/identifier
     * @returns {Promise<{ status: DeviceInfo }>}
     *    success: The success callback should always return with status == unbonded, that is passed with device object
     *    error: The callback that will be triggered when the unbond operation fails
     */
    /**
       * @name unbond (Android)
       * @description Unbond with a device. The device doesn't need to be connected to initiate bonding. Android support only.
       * @param {{address: string}} params The address/identifier
       * @returns {Promise<{ status: DeviceInfo }>}
       *    success: The success callback should always return with status == unbonded, that is passed with device object
       *    error: The callback that will be triggered when the unbond operation fails
       */
    BluetoothLE.prototype.unbond = /**
       * @name unbond (Android)
       * @description Unbond with a device. The device doesn't need to be connected to initiate bonding. Android support only.
       * @param {{address: string}} params The address/identifier
       * @returns {Promise<{ status: DeviceInfo }>}
       *    success: The success callback should always return with status == unbonded, that is passed with device object
       *    error: The callback that will be triggered when the unbond operation fails
       */
    function (params) {
        return;
    };
    /**
     * @name connect
     * @description Connect to a Bluetooth LE device
     * @param connectSuccess The success callback that is passed with device object
     * @param connectError   The callback that will be triggered when the connect operation fails
     * @param params         The address/identifier
     *
     * @param {{address: string, autoConnect: boolean}} params
     * @returns {(Observable<{ status: DeviceInfo }>)}
     *    success: device object with status
     *    error: The callback that will be triggered when the unbond operation fails
     */
    /**
       * @name connect
       * @description Connect to a Bluetooth LE device
       * @param connectSuccess The success callback that is passed with device object
       * @param connectError   The callback that will be triggered when the connect operation fails
       * @param params         The address/identifier
       *
       * @param {{address: string, autoConnect: boolean}} params
       * @returns {(Observable<{ status: DeviceInfo }>)}
       *    success: device object with status
       *    error: The callback that will be triggered when the unbond operation fails
       */
    BluetoothLE.prototype.connect = /**
       * @name connect
       * @description Connect to a Bluetooth LE device
       * @param connectSuccess The success callback that is passed with device object
       * @param connectError   The callback that will be triggered when the connect operation fails
       * @param params         The address/identifier
       *
       * @param {{address: string, autoConnect: boolean}} params
       * @returns {(Observable<{ status: DeviceInfo }>)}
       *    success: device object with status
       *    error: The callback that will be triggered when the unbond operation fails
       */
    function (params) {
        return;
    };
    /**
     * @name reconnect
     * @description Reconnect to a previously connected Bluetooth device
     * @param {{address: string}} params The address/identifier
     * @returns {(Observable<{ status: DeviceInfo }>)}
     */
    /**
       * @name reconnect
       * @description Reconnect to a previously connected Bluetooth device
       * @param {{address: string}} params The address/identifier
       * @returns {(Observable<{ status: DeviceInfo }>)}
       */
    BluetoothLE.prototype.reconnect = /**
       * @name reconnect
       * @description Reconnect to a previously connected Bluetooth device
       * @param {{address: string}} params The address/identifier
       * @returns {(Observable<{ status: DeviceInfo }>)}
       */
    function (params) {
        return;
    };
    /**
     * @name disconnect
     * @description Disconnect from a Bluetooth LE device.
     *              Note: It's simpler to just call close(). Starting with iOS 10, disconnecting before closing seems required!
     * @param {{address: string}} params The address/identifier
     * @returns {Promise<{ status: DeviceInfo }>}
     */
    /**
       * @name disconnect
       * @description Disconnect from a Bluetooth LE device.
       *              Note: It's simpler to just call close(). Starting with iOS 10, disconnecting before closing seems required!
       * @param {{address: string}} params The address/identifier
       * @returns {Promise<{ status: DeviceInfo }>}
       */
    BluetoothLE.prototype.disconnect = /**
       * @name disconnect
       * @description Disconnect from a Bluetooth LE device.
       *              Note: It's simpler to just call close(). Starting with iOS 10, disconnecting before closing seems required!
       * @param {{address: string}} params The address/identifier
       * @returns {Promise<{ status: DeviceInfo }>}
       */
    function (params) {
        return;
    };
    /**
     * @name close
     * @description Close/dispose a Bluetooth LE device.
     * Prior to 2.7.0, you needed to disconnect to the device before closing, but this is no longer the case.
     * Starting with iOS 10, disconnecting before closing seems required!
     * @param {{ address: string }} params The address/identifier
     * @returns {Promise<{ status: DeviceInfo }>}
     */
    /**
       * @name close
       * @description Close/dispose a Bluetooth LE device.
       * Prior to 2.7.0, you needed to disconnect to the device before closing, but this is no longer the case.
       * Starting with iOS 10, disconnecting before closing seems required!
       * @param {{ address: string }} params The address/identifier
       * @returns {Promise<{ status: DeviceInfo }>}
       */
    BluetoothLE.prototype.close = /**
       * @name close
       * @description Close/dispose a Bluetooth LE device.
       * Prior to 2.7.0, you needed to disconnect to the device before closing, but this is no longer the case.
       * Starting with iOS 10, disconnecting before closing seems required!
       * @param {{ address: string }} params The address/identifier
       * @returns {Promise<{ status: DeviceInfo }>}
       */
    function (params) {
        return;
    };
    /**
     * @name discover
     * @description Discover all the devices services, characteristics and descriptors.
     * Doesn't need to be called again after disconnecting and then reconnecting.
     * If using iOS, you shouldn't use discover and services/characteristics/descriptors on the same device.
     * There seems to be an issue with calling discover on iOS8 devices, so use with caution.
     * On some Android versions, the discovered services may be cached for a device.
     * Subsequent discover events will make use of this cache.
     * If your device's services change, set the clearCache parameter to force Android to re-discover services.
     * @param {{ address: string, clearCache: boolean }} params The address/identifier
     * @returns {Promise<{ device: Device }>}
     *    success: device object (contains array of service objects)
     *    error: The callback that will be triggered when the unbond operation fails
     */
    /**
       * @name discover
       * @description Discover all the devices services, characteristics and descriptors.
       * Doesn't need to be called again after disconnecting and then reconnecting.
       * If using iOS, you shouldn't use discover and services/characteristics/descriptors on the same device.
       * There seems to be an issue with calling discover on iOS8 devices, so use with caution.
       * On some Android versions, the discovered services may be cached for a device.
       * Subsequent discover events will make use of this cache.
       * If your device's services change, set the clearCache parameter to force Android to re-discover services.
       * @param {{ address: string, clearCache: boolean }} params The address/identifier
       * @returns {Promise<{ device: Device }>}
       *    success: device object (contains array of service objects)
       *    error: The callback that will be triggered when the unbond operation fails
       */
    BluetoothLE.prototype.discover = /**
       * @name discover
       * @description Discover all the devices services, characteristics and descriptors.
       * Doesn't need to be called again after disconnecting and then reconnecting.
       * If using iOS, you shouldn't use discover and services/characteristics/descriptors on the same device.
       * There seems to be an issue with calling discover on iOS8 devices, so use with caution.
       * On some Android versions, the discovered services may be cached for a device.
       * Subsequent discover events will make use of this cache.
       * If your device's services change, set the clearCache parameter to force Android to re-discover services.
       * @param {{ address: string, clearCache: boolean }} params The address/identifier
       * @returns {Promise<{ device: Device }>}
       *    success: device object (contains array of service objects)
       *    error: The callback that will be triggered when the unbond operation fails
       */
    function (params) {
        return;
    };
    /**
     * @name services (iOS)
     * @description Discover the device's services.
     * Not providing an array of services will return all services and take longer to discover. iOS support only.
     * @param {{address: string, services: string[]}} params
     * @returns {Promise<{ services: Services }>}
     */
    /**
       * @name services (iOS)
       * @description Discover the device's services.
       * Not providing an array of services will return all services and take longer to discover. iOS support only.
       * @param {{address: string, services: string[]}} params
       * @returns {Promise<{ services: Services }>}
       */
    BluetoothLE.prototype.services = /**
       * @name services (iOS)
       * @description Discover the device's services.
       * Not providing an array of services will return all services and take longer to discover. iOS support only.
       * @param {{address: string, services: string[]}} params
       * @returns {Promise<{ services: Services }>}
       */
    function (params) {
        return;
    };
    /**
     * @name characteristics (iOS)
     * @description Discover the service's characteristics.
     * Not providing an array of characteristics will return all characteristics and take longer to discover. iOS support only.
     * @param {CharacteristicParams} params Characteristic params
     * @returns {Promise<{ characteristics: Characteristics }>} The service id and an Array of characteristics
     */
    /**
       * @name characteristics (iOS)
       * @description Discover the service's characteristics.
       * Not providing an array of characteristics will return all characteristics and take longer to discover. iOS support only.
       * @param {CharacteristicParams} params Characteristic params
       * @returns {Promise<{ characteristics: Characteristics }>} The service id and an Array of characteristics
       */
    BluetoothLE.prototype.characteristics = /**
       * @name characteristics (iOS)
       * @description Discover the service's characteristics.
       * Not providing an array of characteristics will return all characteristics and take longer to discover. iOS support only.
       * @param {CharacteristicParams} params Characteristic params
       * @returns {Promise<{ characteristics: Characteristics }>} The service id and an Array of characteristics
       */
    function (params) {
        return;
    };
    /**
     * @name descriptors (iOS)
     * @description Discover the characteristic's descriptors. iOS support only.
     * @param {DescriptorParams} params
     * @returns {Promise<{ descriptors: Descriptors }>}
     */
    /**
       * @name descriptors (iOS)
       * @description Discover the characteristic's descriptors. iOS support only.
       * @param {DescriptorParams} params
       * @returns {Promise<{ descriptors: Descriptors }>}
       */
    BluetoothLE.prototype.descriptors = /**
       * @name descriptors (iOS)
       * @description Discover the characteristic's descriptors. iOS support only.
       * @param {DescriptorParams} params
       * @returns {Promise<{ descriptors: Descriptors }>}
       */
    function (params) {
        return;
    };
    /**
     * @name read
     * @description Read a particular service's characteristic once
     * @param {DescriptorParams} params
     * @returns {Promise<OperationResult>}
     */
    /**
       * @name read
       * @description Read a particular service's characteristic once
       * @param {DescriptorParams} params
       * @returns {Promise<OperationResult>}
       */
    BluetoothLE.prototype.read = /**
       * @name read
       * @description Read a particular service's characteristic once
       * @param {DescriptorParams} params
       * @returns {Promise<OperationResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name subscribe
     * @description Subscribe to a particular service's characteristic.
     * Once a subscription is no longer needed, execute unsubscribe in a similar fashion.
     * The Client Configuration descriptor will automatically be written to enable notification/indication based on the characteristic's properties.
     * @param {DescriptorParams} params
     * @returns {Promise<OperationResult>}
     */
    /**
       * @name subscribe
       * @description Subscribe to a particular service's characteristic.
       * Once a subscription is no longer needed, execute unsubscribe in a similar fashion.
       * The Client Configuration descriptor will automatically be written to enable notification/indication based on the characteristic's properties.
       * @param {DescriptorParams} params
       * @returns {Promise<OperationResult>}
       */
    BluetoothLE.prototype.subscribe = /**
       * @name subscribe
       * @description Subscribe to a particular service's characteristic.
       * Once a subscription is no longer needed, execute unsubscribe in a similar fashion.
       * The Client Configuration descriptor will automatically be written to enable notification/indication based on the characteristic's properties.
       * @param {DescriptorParams} params
       * @returns {Promise<OperationResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name unsubscribe
     * @description Unsubscribe to a particular service's characteristic.
     * @param {DescriptorParams} params
     * @returns {Promise<UnsubscribeResult>}
     */
    /**
       * @name unsubscribe
       * @description Unsubscribe to a particular service's characteristic.
       * @param {DescriptorParams} params
       * @returns {Promise<UnsubscribeResult>}
       */
    BluetoothLE.prototype.unsubscribe = /**
       * @name unsubscribe
       * @description Unsubscribe to a particular service's characteristic.
       * @param {DescriptorParams} params
       * @returns {Promise<UnsubscribeResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name write (limitation on iOS, read below)
     * @description Write a particular service's characteristic
     * Note: no callback will occur on write without response on iOS.
     * @param {WriteCharacteristicParams} params
     * @returns {Promise<OperationResult>}
     */
    /**
       * @name write (limitation on iOS, read below)
       * @description Write a particular service's characteristic
       * Note: no callback will occur on write without response on iOS.
       * @param {WriteCharacteristicParams} params
       * @returns {Promise<OperationResult>}
       */
    BluetoothLE.prototype.write = /**
       * @name write (limitation on iOS, read below)
       * @description Write a particular service's characteristic
       * Note: no callback will occur on write without response on iOS.
       * @param {WriteCharacteristicParams} params
       * @returns {Promise<OperationResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name write (limitation on iOS, read below)
     * @description Write Quick / Queue, use this method to quickly execute write without response commands when writing more than 20 bytes at a time.
     * Note: no callback will occur on write without response on iOS.
     * @param {WriteCharacteristicParams} params
     * @returns {Promise<OperationResult>}
     */
    /**
       * @name write (limitation on iOS, read below)
       * @description Write Quick / Queue, use this method to quickly execute write without response commands when writing more than 20 bytes at a time.
       * Note: no callback will occur on write without response on iOS.
       * @param {WriteCharacteristicParams} params
       * @returns {Promise<OperationResult>}
       */
    BluetoothLE.prototype.writeQ = /**
       * @name write (limitation on iOS, read below)
       * @description Write Quick / Queue, use this method to quickly execute write without response commands when writing more than 20 bytes at a time.
       * Note: no callback will occur on write without response on iOS.
       * @param {WriteCharacteristicParams} params
       * @returns {Promise<OperationResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name readDescriptor
     * @description Read a particular characterist's descriptor
     * @param {OperationDescriptorParams} params
     * @returns {Promise<DescriptorResult>}
     */
    /**
       * @name readDescriptor
       * @description Read a particular characterist's descriptor
       * @param {OperationDescriptorParams} params
       * @returns {Promise<DescriptorResult>}
       */
    BluetoothLE.prototype.readDescriptor = /**
       * @name readDescriptor
       * @description Read a particular characterist's descriptor
       * @param {OperationDescriptorParams} params
       * @returns {Promise<DescriptorResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name writeDescriptor
     * @description Write a particular characteristic's descriptor. Unable to write characteristic configuration directly to keep in line with iOS implementation.
     * Instead use subscribe/unsubscribe, which will automatically enable/disable notification.
     * @param {WriteDescriptorParams} params
     * @returns {Promise<DescriptorResult>}
     */
    /**
       * @name writeDescriptor
       * @description Write a particular characteristic's descriptor. Unable to write characteristic configuration directly to keep in line with iOS implementation.
       * Instead use subscribe/unsubscribe, which will automatically enable/disable notification.
       * @param {WriteDescriptorParams} params
       * @returns {Promise<DescriptorResult>}
       */
    BluetoothLE.prototype.writeDescriptor = /**
       * @name writeDescriptor
       * @description Write a particular characteristic's descriptor. Unable to write characteristic configuration directly to keep in line with iOS implementation.
       * Instead use subscribe/unsubscribe, which will automatically enable/disable notification.
       * @param {WriteDescriptorParams} params
       * @returns {Promise<DescriptorResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name rssi
     * @description Read RSSI of a connected device. RSSI is also returned with scanning.
     * @param {{ address: string }} params
     * @returns {Promise<{ rssi: RSSI }>}
     */
    /**
       * @name rssi
       * @description Read RSSI of a connected device. RSSI is also returned with scanning.
       * @param {{ address: string }} params
       * @returns {Promise<{ rssi: RSSI }>}
       */
    BluetoothLE.prototype.rssi = /**
       * @name rssi
       * @description Read RSSI of a connected device. RSSI is also returned with scanning.
       * @param {{ address: string }} params
       * @returns {Promise<{ rssi: RSSI }>}
       */
    function (params) {
        return;
    };
    /**
     * @name mtu (Android, Android 5+)
     * @description Set MTU of a connected device. Android only.
     * @param {{ address: string, mtu: number }} params
     * @returns {Promise<{ mtu: MTU }>}
     */
    /**
       * @name mtu (Android, Android 5+)
       * @description Set MTU of a connected device. Android only.
       * @param {{ address: string, mtu: number }} params
       * @returns {Promise<{ mtu: MTU }>}
       */
    BluetoothLE.prototype.mtu = /**
       * @name mtu (Android, Android 5+)
       * @description Set MTU of a connected device. Android only.
       * @param {{ address: string, mtu: number }} params
       * @returns {Promise<{ mtu: MTU }>}
       */
    function (params) {
        return;
    };
    /**
     * @name requestConnectionPriority (Android, Android 5+)
     * @description Request a change in the connection priority to improve throughput when transfer large amounts of data via BLE.
     * Android support only. iOS will return error.
     * @param {{ address: string, connectionPriority: ConnectionPriority }} params
     * @returns {Promise<DeviceInfo>}
     */
    /**
       * @name requestConnectionPriority (Android, Android 5+)
       * @description Request a change in the connection priority to improve throughput when transfer large amounts of data via BLE.
       * Android support only. iOS will return error.
       * @param {{ address: string, connectionPriority: ConnectionPriority }} params
       * @returns {Promise<DeviceInfo>}
       */
    BluetoothLE.prototype.requestConnectionPriority = /**
       * @name requestConnectionPriority (Android, Android 5+)
       * @description Request a change in the connection priority to improve throughput when transfer large amounts of data via BLE.
       * Android support only. iOS will return error.
       * @param {{ address: string, connectionPriority: ConnectionPriority }} params
       * @returns {Promise<DeviceInfo>}
       */
    function (params) {
        return;
    };
    /**
     * @name isInitialized
     * @description Determine whether the adapter is initialized. No error callback. Returns true or false
     * @returns {Promise<{ isInitialized: boolean }>}
     */
    /**
       * @name isInitialized
       * @description Determine whether the adapter is initialized. No error callback. Returns true or false
       * @returns {Promise<{ isInitialized: boolean }>}
       */
    BluetoothLE.prototype.isInitialized = /**
       * @name isInitialized
       * @description Determine whether the adapter is initialized. No error callback. Returns true or false
       * @returns {Promise<{ isInitialized: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name isEnabled
     * @description Determine whether the adapter is enabled. No error callback
     * @returns {Promise<{ isEnabled: boolean }>}
     */
    /**
       * @name isEnabled
       * @description Determine whether the adapter is enabled. No error callback
       * @returns {Promise<{ isEnabled: boolean }>}
       */
    BluetoothLE.prototype.isEnabled = /**
       * @name isEnabled
       * @description Determine whether the adapter is enabled. No error callback
       * @returns {Promise<{ isEnabled: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name isScanning
     * @description Determine whether the adapter is scanning. No error callback. Returns true or false
     * @returns {Promise<{ isScanning: boolean }>}
     */
    /**
       * @name isScanning
       * @description Determine whether the adapter is scanning. No error callback. Returns true or false
       * @returns {Promise<{ isScanning: boolean }>}
       */
    BluetoothLE.prototype.isScanning = /**
       * @name isScanning
       * @description Determine whether the adapter is scanning. No error callback. Returns true or false
       * @returns {Promise<{ isScanning: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name isBonded (Android)
     * @description Determine whether the device is bonded or not, or error if not initialized. Android support only.
     * @param {{ address: string }} params
     * @returns {Promise<BondedStatus>}
     */
    /**
       * @name isBonded (Android)
       * @description Determine whether the device is bonded or not, or error if not initialized. Android support only.
       * @param {{ address: string }} params
       * @returns {Promise<BondedStatus>}
       */
    BluetoothLE.prototype.isBonded = /**
       * @name isBonded (Android)
       * @description Determine whether the device is bonded or not, or error if not initialized. Android support only.
       * @param {{ address: string }} params
       * @returns {Promise<BondedStatus>}
       */
    function (params) {
        return;
    };
    /**
     * @name wasConnected
     * @description Determine whether the device was connected, or error if not initialized.
     * @param {{ address: string }} params
     * @returns {Promise<PrevConnectionStatus>}
     */
    /**
       * @name wasConnected
       * @description Determine whether the device was connected, or error if not initialized.
       * @param {{ address: string }} params
       * @returns {Promise<PrevConnectionStatus>}
       */
    BluetoothLE.prototype.wasConnected = /**
       * @name wasConnected
       * @description Determine whether the device was connected, or error if not initialized.
       * @param {{ address: string }} params
       * @returns {Promise<PrevConnectionStatus>}
       */
    function (params) {
        return;
    };
    /**
     * @name isConnected
     * @description Determine whether the device is connected, or error if not initialized or never connected to device
     * @param {{ address: string }} params
     * @returns {Promise<CurrConnectionStatus>}
     */
    /**
       * @name isConnected
       * @description Determine whether the device is connected, or error if not initialized or never connected to device
       * @param {{ address: string }} params
       * @returns {Promise<CurrConnectionStatus>}
       */
    BluetoothLE.prototype.isConnected = /**
       * @name isConnected
       * @description Determine whether the device is connected, or error if not initialized or never connected to device
       * @param {{ address: string }} params
       * @returns {Promise<CurrConnectionStatus>}
       */
    function (params) {
        return;
    };
    /**
     * @name isDiscovered
     * @description Determine whether the device's characteristics and descriptors have been discovered, or error if not initialized or not connected to device.
     * @param {{ address: string }} params
     * @returns {Promise<DiscoverStatus>}
     */
    /**
       * @name isDiscovered
       * @description Determine whether the device's characteristics and descriptors have been discovered, or error if not initialized or not connected to device.
       * @param {{ address: string }} params
       * @returns {Promise<DiscoverStatus>}
       */
    BluetoothLE.prototype.isDiscovered = /**
       * @name isDiscovered
       * @description Determine whether the device's characteristics and descriptors have been discovered, or error if not initialized or not connected to device.
       * @param {{ address: string }} params
       * @returns {Promise<DiscoverStatus>}
       */
    function (params) {
        return;
    };
    /**
     * @name hasPermission (useful only for Android 6+ / API 23)
     * @description Determine whether coarse location privileges are granted since scanning for unpaired devices requires it in Android API 23
     * @returns {Promise<{ hasPermission: boolean }>}
     */
    /**
       * @name hasPermission (useful only for Android 6+ / API 23)
       * @description Determine whether coarse location privileges are granted since scanning for unpaired devices requires it in Android API 23
       * @returns {Promise<{ hasPermission: boolean }>}
       */
    BluetoothLE.prototype.hasPermission = /**
       * @name hasPermission (useful only for Android 6+ / API 23)
       * @description Determine whether coarse location privileges are granted since scanning for unpaired devices requires it in Android API 23
       * @returns {Promise<{ hasPermission: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name requestPermission (useful only for Android 6+ / API 23)
     * @description Request coarse location privileges since scanning for unpaired devices requires it in Android API 23.
     * Will return an error if called on iOS or Android versions prior to 6.0.
     * @returns {Promise<{ requestPermission: boolean }>}
     */
    /**
       * @name requestPermission (useful only for Android 6+ / API 23)
       * @description Request coarse location privileges since scanning for unpaired devices requires it in Android API 23.
       * Will return an error if called on iOS or Android versions prior to 6.0.
       * @returns {Promise<{ requestPermission: boolean }>}
       */
    BluetoothLE.prototype.requestPermission = /**
       * @name requestPermission (useful only for Android 6+ / API 23)
       * @description Request coarse location privileges since scanning for unpaired devices requires it in Android API 23.
       * Will return an error if called on iOS or Android versions prior to 6.0.
       * @returns {Promise<{ requestPermission: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name isLocationEnabled (useful only for Android 6+ / API 23)
     * @description Determine if location services are enabled or not. Location Services are required to find devices in Android API 23
     * @returns {Promise<{ isLocationEnabled: boolean }>}
     */
    /**
       * @name isLocationEnabled (useful only for Android 6+ / API 23)
       * @description Determine if location services are enabled or not. Location Services are required to find devices in Android API 23
       * @returns {Promise<{ isLocationEnabled: boolean }>}
       */
    BluetoothLE.prototype.isLocationEnabled = /**
       * @name isLocationEnabled (useful only for Android 6+ / API 23)
       * @description Determine if location services are enabled or not. Location Services are required to find devices in Android API 23
       * @returns {Promise<{ isLocationEnabled: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name requestLocation (useful only for Android 6+ / API 23)
     * @description Prompt location services settings pages. requestLocation property returns whether location services are enabled or disabled.
     * Location Services are required to find devices in Android API 23.
     * @returns {Promise<{ requestLocation: boolean }>}
     */
    /**
       * @name requestLocation (useful only for Android 6+ / API 23)
       * @description Prompt location services settings pages. requestLocation property returns whether location services are enabled or disabled.
       * Location Services are required to find devices in Android API 23.
       * @returns {Promise<{ requestLocation: boolean }>}
       */
    BluetoothLE.prototype.requestLocation = /**
       * @name requestLocation (useful only for Android 6+ / API 23)
       * @description Prompt location services settings pages. requestLocation property returns whether location services are enabled or disabled.
       * Location Services are required to find devices in Android API 23.
       * @returns {Promise<{ requestLocation: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name initializePeripheral
     * @description Initialize Bluetooth on the device. Must be called before anything else.
     * Callback will continuously be used whenever Bluetooth is enabled or disabled.
     * @param {InitPeripheralParams} [params]
     * @returns {Observable<InitializeResult>}
     */
    /**
       * @name initializePeripheral
       * @description Initialize Bluetooth on the device. Must be called before anything else.
       * Callback will continuously be used whenever Bluetooth is enabled or disabled.
       * @param {InitPeripheralParams} [params]
       * @returns {Observable<InitializeResult>}
       */
    BluetoothLE.prototype.initializePeripheral = /**
       * @name initializePeripheral
       * @description Initialize Bluetooth on the device. Must be called before anything else.
       * Callback will continuously be used whenever Bluetooth is enabled or disabled.
       * @param {InitPeripheralParams} [params]
       * @returns {Observable<InitializeResult>}
       */
    function (params) {
        return;
    };
    /**
     * @name addService
     * @description Add a service with characteristics and descriptors. If more than one service is added, add them sequentially
     * @param {{ service: string, characteristics: Characteristic[] }} params
     * @returns {Promise<{ service: string, status: Status }>}
     */
    /**
       * @name addService
       * @description Add a service with characteristics and descriptors. If more than one service is added, add them sequentially
       * @param {{ service: string, characteristics: Characteristic[] }} params
       * @returns {Promise<{ service: string, status: Status }>}
       */
    BluetoothLE.prototype.addService = /**
       * @name addService
       * @description Add a service with characteristics and descriptors. If more than one service is added, add them sequentially
       * @param {{ service: string, characteristics: Characteristic[] }} params
       * @returns {Promise<{ service: string, status: Status }>}
       */
    function (params) {
        return;
    };
    /**
     * @name removeService
     * @description Remove a service
     * @param {{ service: string }} params
     * @returns {Promise<{ service: string, status: Status }>}
     */
    /**
       * @name removeService
       * @description Remove a service
       * @param {{ service: string }} params
       * @returns {Promise<{ service: string, status: Status }>}
       */
    BluetoothLE.prototype.removeService = /**
       * @name removeService
       * @description Remove a service
       * @param {{ service: string }} params
       * @returns {Promise<{ service: string, status: Status }>}
       */
    function (params) {
        return;
    };
    /**
     * @name removeAllServices
     * @description Remove all services
     * @returns {Promise<{ status: Status }>}
     */
    /**
       * @name removeAllServices
       * @description Remove all services
       * @returns {Promise<{ status: Status }>}
       */
    BluetoothLE.prototype.removeAllServices = /**
       * @name removeAllServices
       * @description Remove all services
       * @returns {Promise<{ status: Status }>}
       */
    function () {
        return;
    };
    /**
     * @name startAdvertising (different behavior on Android/iOS, read below)
     * @description Start advertising as a BLE device.
     * Note: This needs to be improved so services can be used for both Android and iOS.
     * On iOS, the advertising devices likes to rename itself back to the name of the device, i.e. Rand' iPhone
     * @param {AdvertisingParams} params
     * @returns {Promise<{ status: Status }>}
     */
    /**
       * @name startAdvertising (different behavior on Android/iOS, read below)
       * @description Start advertising as a BLE device.
       * Note: This needs to be improved so services can be used for both Android and iOS.
       * On iOS, the advertising devices likes to rename itself back to the name of the device, i.e. Rand' iPhone
       * @param {AdvertisingParams} params
       * @returns {Promise<{ status: Status }>}
       */
    BluetoothLE.prototype.startAdvertising = /**
       * @name startAdvertising (different behavior on Android/iOS, read below)
       * @description Start advertising as a BLE device.
       * Note: This needs to be improved so services can be used for both Android and iOS.
       * On iOS, the advertising devices likes to rename itself back to the name of the device, i.e. Rand' iPhone
       * @param {AdvertisingParams} params
       * @returns {Promise<{ status: Status }>}
       */
    function (params) {
        return;
    };
    /**
     * @name stopAdvertising
     * @description Stop advertising
     * @returns {Promise<{ status: Status }>}
     */
    /**
       * @name stopAdvertising
       * @description Stop advertising
       * @returns {Promise<{ status: Status }>}
       */
    BluetoothLE.prototype.stopAdvertising = /**
       * @name stopAdvertising
       * @description Stop advertising
       * @returns {Promise<{ status: Status }>}
       */
    function () {
        return;
    };
    /**
     * @name isAdvertising
     * @description Determine if app is advertising or not.
     * @returns {Promise<{ status: boolean }>}
     */
    /**
       * @name isAdvertising
       * @description Determine if app is advertising or not.
       * @returns {Promise<{ status: boolean }>}
       */
    BluetoothLE.prototype.isAdvertising = /**
       * @name isAdvertising
       * @description Determine if app is advertising or not.
       * @returns {Promise<{ status: boolean }>}
       */
    function () {
        return;
    };
    /**
     * @name respond
     * @description Respond to a read or write request
     * @param {RespondParams} params
     * @returns {Promise<{ status: Status }>}
     */
    /**
       * @name respond
       * @description Respond to a read or write request
       * @param {RespondParams} params
       * @returns {Promise<{ status: Status }>}
       */
    BluetoothLE.prototype.respond = /**
       * @name respond
       * @description Respond to a read or write request
       * @param {RespondParams} params
       * @returns {Promise<{ status: Status }>}
       */
    function (params) {
        return;
    };
    /**
     * @name notify
     * @description Update a value for a subscription. Currently all subscribed devices will receive update.
     * Device specific updates will be added in the future.
     * If sent equals false in the return value, you must wait for the peripheralManagerIsReadyToUpdateSubscribers event before sending more updates.
     * @param {NotifyParams} params
     * @returns {Promise<{ status: Status, sent: boolean }>}
     */
    /**
       * @name notify
       * @description Update a value for a subscription. Currently all subscribed devices will receive update.
       * Device specific updates will be added in the future.
       * If sent equals false in the return value, you must wait for the peripheralManagerIsReadyToUpdateSubscribers event before sending more updates.
       * @param {NotifyParams} params
       * @returns {Promise<{ status: Status, sent: boolean }>}
       */
    BluetoothLE.prototype.notify = /**
       * @name notify
       * @description Update a value for a subscription. Currently all subscribed devices will receive update.
       * Device specific updates will be added in the future.
       * If sent equals false in the return value, you must wait for the peripheralManagerIsReadyToUpdateSubscribers event before sending more updates.
       * @param {NotifyParams} params
       * @returns {Promise<{ status: Status, sent: boolean }>}
       */
    function (params) {
        return;
    };
    /**
     * @name encodedStringToBytes
     * @description Helper function to convert a base64 encoded string from a characteristic or descriptor value into a uint8Array object
     * @param {string} str
     * @returns {Uint8Array}
     */
    /**
       * @name encodedStringToBytes
       * @description Helper function to convert a base64 encoded string from a characteristic or descriptor value into a uint8Array object
       * @param {string} str
       * @returns {Uint8Array}
       */
    BluetoothLE.prototype.encodedStringToBytes = /**
       * @name encodedStringToBytes
       * @description Helper function to convert a base64 encoded string from a characteristic or descriptor value into a uint8Array object
       * @param {string} str
       * @returns {Uint8Array}
       */
    function (value) {
        return;
    };
    /**
     * @name bytesToEncodedString
     * @description Helper function to convert a unit8Array to a base64 encoded string for a characteric or descriptor write
     * @param {Uint8Array} bytes
     * @returns {string}
     */
    /**
       * @name bytesToEncodedString
       * @description Helper function to convert a unit8Array to a base64 encoded string for a characteric or descriptor write
       * @param {Uint8Array} bytes
       * @returns {string}
       */
    BluetoothLE.prototype.bytesToEncodedString = /**
       * @name bytesToEncodedString
       * @description Helper function to convert a unit8Array to a base64 encoded string for a characteric or descriptor write
       * @param {Uint8Array} bytes
       * @returns {string}
       */
    function (value) {
        return;
    };
    /**
     * @name stringToBytes
     * @description Helper function to convert a string to bytes
     * @param {Uint8Array} value
     * @returns {string}
     */
    /**
       * @name stringToBytes
       * @description Helper function to convert a string to bytes
       * @param {Uint8Array} value
       * @returns {string}
       */
    BluetoothLE.prototype.stringToBytes = /**
       * @name stringToBytes
       * @description Helper function to convert a string to bytes
       * @param {Uint8Array} value
       * @returns {string}
       */
    function (value) {
        return;
    };
    /**
     * @name bytesToString
     * @description Helper function to convert bytes to a string.
     * @param {Uint8Array} value
     * @returns {string}
     */
    /**
       * @name bytesToString
       * @description Helper function to convert bytes to a string.
       * @param {Uint8Array} value
       * @returns {string}
       */
    BluetoothLE.prototype.bytesToString = /**
       * @name bytesToString
       * @description Helper function to convert bytes to a string.
       * @param {Uint8Array} value
       * @returns {string}
       */
    function (value) {
        return;
    };
    BluetoothLE.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "initialize", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse', sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "enable", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse', sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BluetoothLE.prototype, "disable", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "getAdapterInfo", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse', observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BluetoothLE.prototype, "startScan", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "stopScan", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "retrieveConnected", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse', observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BluetoothLE.prototype, "bond", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "unbond", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse', observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BluetoothLE.prototype, "connect", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse', observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BluetoothLE.prototype, "reconnect", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "disconnect", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "close", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "discover", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "services", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "characteristics", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "descriptors", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "read", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse', observable: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BluetoothLE.prototype, "subscribe", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "unsubscribe", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "write", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "writeQ", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "readDescriptor", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "writeDescriptor", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "rssi", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "mtu", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "requestConnectionPriority", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isInitialized", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isEnabled", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isScanning", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isBonded", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "wasConnected", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isConnected", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isDiscovered", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "hasPermission", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "requestPermission", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isLocationEnabled", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "requestLocation", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Observable)
    ], BluetoothLE.prototype, "initializePeripheral", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "addService", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "removeService", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "removeAllServices", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "startAdvertising", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "stopAdvertising", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "isAdvertising", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "respond", null);
    __decorate([
        Cordova({ callbackOrder: 'reverse' }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], BluetoothLE.prototype, "notify", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Uint8Array)
    ], BluetoothLE.prototype, "encodedStringToBytes", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Uint8Array]),
        __metadata("design:returntype", String)
    ], BluetoothLE.prototype, "bytesToEncodedString", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Uint8Array]),
        __metadata("design:returntype", String)
    ], BluetoothLE.prototype, "stringToBytes", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Uint8Array]),
        __metadata("design:returntype", String)
    ], BluetoothLE.prototype, "bytesToString", null);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "SCAN_MODE_OPPORTUNISTIC", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "SCAN_MODE_LOW_POWER", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "SCAN_MODE_BALANCED", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "SCAN_MODE_LOW_LATENCY", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "MATCH_MODE_AGRESSIVE", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "MATCH_MODE_STICKY", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "MATCH_NUM_ONE_ADVERTISEMENT", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "MATCH_NUM_FEW_ADVERTISEMENT", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "MATCH_NUM_MAX_ADVERTISEMENT", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "CALLBACK_TYPE_ALL_MATCHES", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "CALLBACK_TYPE_FIRST_MATCH", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "CALLBACK_TYPE_MATCH_LOST", void 0);
    /**
     * @name BluetoothLE
     * @description
     * This plugin has the most complete implementation for interacting with Bluetooth LE devices on Android, iOS and partially Windows.
     * It's a wrap around [randdusing/cordova-plugin-bluetoothle](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md) cordova plugin for Ionic.
     * It supports peripheral **and** central modes and covers most of the API methods available on Android and iOS.
     *
     * @usage
     * ```typescript
     * import { BluetoothLE } from '@ionic-native/bluetooth-le';
     *
     *
     * constructor(public bluetoothle: BluetoothLE, public plt: Platform) {
     *
     *  this.plt.ready().then((readySource) => {
     *
     *    console.log('Platform ready from', readySource);
     *
     *    this.bluetoothle.initialize().then(ble => {
     *      console.log('ble', ble.status) // logs 'enabled'
     *    });
     *
     *   });
     * }
     *
     * ```
     *
     */
    BluetoothLE = __decorate([
        Plugin({
            pluginName: 'BluetoothLE',
            plugin: 'cordova-plugin-bluetoothle',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'bluetoothle',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/randdusing/cordova-plugin-bluetoothle',
            // the github repository URL for the plugin
            install: 'ionic cordova plugin add cordova-plugin-bluetoothle',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: [],
            // OPTIONAL the plugin requires variables
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], BluetoothLE);
    return BluetoothLE;
}(IonicNativePlugin));
export { BluetoothLE };
//# sourceMappingURL=index.js.map