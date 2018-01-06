import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
export interface ICharacteristicPath {
    address: string;
    service: string;
    characteristic: string;
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
export declare class BluetoothLE extends IonicNativePlugin {
    initialize(params?: {
        request?: boolean;
        statusReceiver?: boolean;
        restoreKey?: string;
    }): Promise<{
        status: 'enabled' | 'disabled';
        message?: string;
    }>;
    enable(): void;
    getAdapterInfo(): Promise<{
        name: string;
        address: string;
        isInitialized: boolean;
        isEnabled: boolean;
        isScanning: boolean;
        isDiscoverable: boolean;
    }>;
    retrieveConnected(params?: any): Promise<any>;
    isEnabled(): Promise<{
        isEnabled: boolean;
    }>;
    requestPermission(): Promise<{
        requestPermission: boolean;
    }>;
    requestLocation(): Promise<{
        requestLocation: boolean;
    }>;
    isLocationEnabled(): Promise<{
        isLocationEnabled: boolean;
    }>;
    startScan(params: {
        allowDuplicates?: boolean;
        matchNum?: number;
        callbackType?: number;
        scanMode?: number;
        services: string[];
    }): Observable<{
        status: 'scanResult' | 'scanStarted';
        advertisement?: string | any;
        rssi?: number;
        name?: string;
        address?: string;
    }>;
    hasPermission(): Promise<{
        hasPermission: boolean;
    }>;
    disconnect(params: {
        address: string;
    }): Promise<{
        address: string;
        name: string;
        status: 'disconnected';
    }>;
    /**
     * Note, no callback will occur on write without response on iOS.
     */
    write(params: ({
        value: string;
        type?: 'noResponse';
    } & ICharacteristicPath)): Promise<any> | void;
    read(params: ICharacteristicPath): Promise<{
        value: string;
        name: string;
        status: string;
    } & ICharacteristicPath>;
    connect(params: {
        address: string;
        autoConnect?: boolean;
    }): Observable<{
        name: string;
        address: string;
        status: 'connected' | 'disconnected';
    }>;
    discover(params: {
        address: string;
        clearCache?: boolean;
    }): Promise<{
        status: string;
        address: string;
        name: string;
        services: {
            uuid: string;
            characteristics: {
                uuid: string;
                descriptors: any[];
            }[];
        }[];
    }>;
    subscribe(params: ICharacteristicPath): Observable<{
        status: 'subscribed' | 'subscribedResult';
        value: string;
    }>;
    unsubscribe(params: any): void;
    stopScan(): Promise<{
        status: 'scanStopped';
    }>;
    SCAN_MODE_OPPORTUNISTIC: number;
    SCAN_MODE_LOW_POWER: number;
    SCAN_MODE_BALANCED: number;
    SCAN_MODE_LOW_LATENCY: number;
    MATCH_NUM_ONE_ADVERTISEMENT: number;
    MATCH_NUM_FEW_ADVERTISEMENT: number;
    MATCH_NUM_MAX_ADVERTISEMENT: number;
    MATCH_MODE_AGGRESSIVE: number;
    MATCH_MODE_STICKY: number;
    CALLBACK_TYPE_ALL_MATCHES: number;
    CALLBACK_TYPE_FIRST_MATCH: number;
    CALLBACK_TYPE_MATCH_LOST: number;
    bytesToEncodedString(bytes: Uint8Array): string;
    encodedStringToBytes(str: string): Uint8Array;
}
