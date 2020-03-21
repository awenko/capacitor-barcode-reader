declare module "@capacitor/core" {
    interface PluginRegistry {
        BarcodeReaderPlugin: BarcodeReaderPluginPlugin;
    }
}
export declare type BarcodeReaderFoundResult = {
    action: "found";
    value: string;
};
export declare type BarcodeReaderClosedResult = {
    action: "closed";
};
export declare type BarcodeReaderResult = BarcodeReaderFoundResult | BarcodeReaderClosedResult;
export interface BarcodeReaderPluginPlugin {
    open(): Promise<BarcodeReaderResult>;
    close(): Promise<void>;
}
