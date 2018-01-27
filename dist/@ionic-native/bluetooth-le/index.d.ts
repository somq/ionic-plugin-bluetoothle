import { IonicNativePlugin } from '@ionic-native/core';
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
    value: string;
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
    disable(): void;
    getAdapterInfo(): Promise<{
        name: string;
        address: string;
        isInitialized: boolean;
        isEnabled: boolean;
        isScanning: boolean;
        isDiscoverable: boolean;
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
    stopScan(): Promise<{
        status: 'scanStopped';
    }>;
    retrieveConnected(params?: any): Promise<any>;
    /**
     * bond
     */
    bond(params: {
        address: string;
        autoConnect?: boolean;
    }): Observable<{
        name: string;
        address: string;
        status: 'bonded' | 'bonding' | 'unbonded';
    }>;
    /**
     * unbond
     */
    unbond(params: {
        address: string;
    }): Promise<{
        name: string;
        address: string;
        status: 'unbonded';
    }>;
    connect(params: {
        address: string;
        autoConnect?: boolean;
    }): Observable<{
        name: string;
        address: string;
        status: 'connected' | 'disconnected';
    }>;
    /**
     * reconnect
     */
    reconnect(params: {
        address: string;
    }): Observable<{
        name: string;
        address: string;
        status: 'connected' | 'disconnected';
    }>;
    disconnect(params: {
        address: string;
    }): Promise<{
        address: string;
        name: string;
        status: 'disconnected';
    }>;
    /**
     * close
     */
    close(params: {
        address: string;
    }): Promise<{
        name: string;
        address: string;
        status: string;
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
    /**
     * services (iOS)
     */
    /**
     * characteristics (iOS)
     */
    /**
     * descriptors
     */
    read(params: ICharacteristicPath): Promise<{
        value: string;
        name: string;
        status: string;
    } & ICharacteristicPath>;
    subscribe(params: ICharacteristicPath): Observable<{
        status: 'subscribed' | 'subscribedResult';
        value: string;
    } & ICharacteristicPath>;
    unsubscribe(params: any): void;
    /**
     * Note, no callback will occur on write without response on iOS.
     */
    write(params: WriteCharacteristicParams): Promise<any>;
    /**
     * writeQ
     */
    writeQ(params: ({
        value: string;
        type?: 'noResponse';
    } & ICharacteristicPath)): Promise<any> | void;
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
    isInitialized(): Promise<{
        isInitialized: boolean;
    }>;
    isEnabled(): Promise<{
        isEnabled: boolean;
    }>;
    /**
     * isScanning
     */
    isScanning(): Promise<{
        isScanning: boolean;
    }>;
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
    hasPermission(): Promise<{
        hasPermission: boolean;
    }>;
    requestPermission(): Promise<{
        requestPermission: boolean;
    }>;
    isLocationEnabled(): Promise<{
        isLocationEnabled: boolean;
    }>;
    requestLocation(): Promise<{
        requestLocation: boolean;
    }>;
    /**
     * initializePeripheral @todo
     */
    initializePeripheral(params: {
        request?: boolean;
        restoreKey: string;
    }): Promise<{
        status: string;
        address: string;
        service: string;
        characteristic: string;
        requestId: number;
        value: string;
        offset: number;
        mtu: number;
    }>;
    /**
     * addService @todo
     */
    addService(params: {
        service: string;
        characteristics: {
            uuid: string;
            permissions: {
                read: boolean;
                write: boolean;
                readEncryptionRequired: boolean;
                writeEncryptionRequired: boolean;
            };
            properties: {
                read: boolean;
                writeWithoutResponse: boolean;
                write: boolean;
                notify: boolean;
                indicate: boolean;
                authenticatedSignedWrites: boolean;
                notifyEncryptionRequired: boolean;
                indicateEncryptionRequired: boolean;
            };
        }[];
    }): Promise<{
        status: string;
        service: string;
    }>;
    /**
     * removeService
     */
    /**
     * removeAllServices
     */
    /**
     * startAdvertising @todo
     */
    startAdvertising(params: {
        services?: string[];
        service?: string;
        name: string;
    }): Promise<{
        status: string;
    }>;
    /**
     * stopAdvertising
     */
    /**
     * respond
     */
    /**
     * notify
     */
    bytesToEncodedString(bytes: Uint8Array): string;
    encodedStringToBytes(str: string): Uint8Array;
    /**
     * stringToBytes
     */
    /**
     * bytesToString
     */
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
}
