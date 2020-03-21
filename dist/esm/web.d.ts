import { WebPlugin } from "@capacitor/core";
import "webcodecamjs/js/qrcodelib";
export declare class BarcodeReaderPluginWeb extends WebPlugin {
    constructor();
    open(): Promise<unknown>;
    close(): void;
}
declare const BarcodeReaderPlugin: BarcodeReaderPluginWeb;
export { BarcodeReaderPlugin };
