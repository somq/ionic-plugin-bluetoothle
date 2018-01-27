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
// import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
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
var BluetoothLE = (function (_super) {
    __extends(BluetoothLE, _super);
    function BluetoothLE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothLE.prototype.initialize = function (params) {
        return;
    };
    BluetoothLE.prototype.enable = function () {
        return;
    };
    BluetoothLE.prototype.disable = function () {
        return;
    };
    BluetoothLE.prototype.getAdapterInfo = function () {
        return;
    };
    BluetoothLE.prototype.startScan = function (params) {
        return;
    };
    BluetoothLE.prototype.stopScan = function () {
        return;
    };
    BluetoothLE.prototype.retrieveConnected = function (params) {
        return;
    };
    /**
     * bond
     */
    BluetoothLE.prototype.bond = function (params) {
        return;
    };
    /**
     * unbond
     */
    BluetoothLE.prototype.unbond = function (params) {
        return;
    };
    BluetoothLE.prototype.connect = function (params) {
        return;
    };
    /**
     * reconnect
     */
    BluetoothLE.prototype.reconnect = function (params) {
        return;
    };
    BluetoothLE.prototype.disconnect = function (params) {
        return;
    };
    /**
     * close
     */
    BluetoothLE.prototype.close = function (params) {
        return;
    };
    BluetoothLE.prototype.discover = function (params) {
        return;
    };
    /**
     * services (iOS)
     */
    /**
     * characteristics (iOS)
     */
    /**
     * descriptors
     */
    BluetoothLE.prototype.read = function (params) {
        return;
    };
    BluetoothLE.prototype.subscribe = function (params) {
        return;
    };
    BluetoothLE.prototype.unsubscribe = function (params) {
        return;
    };
    /**
     * Note, no callback will occur on write without response on iOS.
     */
    BluetoothLE.prototype.write = function (params) {
        return;
    };
    // write(params: ({
    //   value: string,
    //   type?: 'noResponse'
    // } & ICharacteristicPath)): Promise<any> | void {
    //   return;
    // }
    /**
     * writeQ
     */
    BluetoothLE.prototype.writeQ = function (params) {
        return;
    };
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
    BluetoothLE.prototype.isInitialized = function () {
        return;
    };
    BluetoothLE.prototype.isEnabled = function () {
        return;
    };
    /**
     * isScanning
     */
    BluetoothLE.prototype.isScanning = function () {
        return;
    };
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
    BluetoothLE.prototype.hasPermission = function () {
        return;
    };
    BluetoothLE.prototype.requestPermission = function () {
        return;
    };
    BluetoothLE.prototype.isLocationEnabled = function () {
        return;
    };
    BluetoothLE.prototype.requestLocation = function () {
        return;
    };
    /**
     * initializePeripheral @todo
     */
    BluetoothLE.prototype.initializePeripheral = function (params) {
        return;
    };
    /**
     * addService @todo
     */
    BluetoothLE.prototype.addService = function (params) {
        return;
    };
    /**
     * removeService
     */
    /**
     * removeAllServices
     */
    /**
     * startAdvertising @todo
     */
    BluetoothLE.prototype.startAdvertising = function (params) {
        return;
    };
    /**
     * stopAdvertising
     */
    /**
     * respond
     */
    /**
     * notify
     */
    BluetoothLE.prototype.bytesToEncodedString = function (bytes) {
        return;
    };
    BluetoothLE.prototype.encodedStringToBytes = function (str) {
        return;
    };
    BluetoothLE.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    BluetoothLE.ctorParameters = function () { return []; };
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
        __metadata("design:returntype", void 0)
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
        __metadata("design:returntype", void 0)
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
        __metadata("design:returntype", Object)
    ], BluetoothLE.prototype, "writeQ", null);
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
        __metadata("design:returntype", Promise)
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
    ], BluetoothLE.prototype, "startAdvertising", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Uint8Array]),
        __metadata("design:returntype", String)
    ], BluetoothLE.prototype, "bytesToEncodedString", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Uint8Array)
    ], BluetoothLE.prototype, "encodedStringToBytes", null);
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
    ], BluetoothLE.prototype, "MATCH_MODE_AGGRESSIVE", void 0);
    __decorate([
        CordovaProperty,
        __metadata("design:type", Number)
    ], BluetoothLE.prototype, "MATCH_MODE_STICKY", void 0);
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
    BluetoothLE = __decorate([
        Plugin({
            pluginName: 'BluetoothLE',
            plugin: 'cordova-plugin-bluetoothle',
            pluginRef: 'bluetoothle',
            repo: 'https://github.com/randdusing/cordova-plugin-bluetoothle',
            install: 'ionic cordova plugin add cordova-plugin-bluetoothle',
            installVariables: [],
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], BluetoothLE);
    return BluetoothLE;
}(IonicNativePlugin));
export { BluetoothLE };
//# sourceMappingURL=index.js.map