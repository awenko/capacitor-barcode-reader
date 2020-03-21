import { WebPlugin } from "@capacitor/core";
export class BarcodeReaderPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: "BarcodeReaderPlugin",
            platforms: ["web"]
        });
    }
    open() {
        throw new Error("Method not implemented.");
    }
    close() {
        throw new Error("Method not implemented.");
    }
}
const BarcodeReaderPlugin = new BarcodeReaderPluginWeb();
export { BarcodeReaderPlugin };
import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(BarcodeReaderPlugin);
//# sourceMappingURL=web.js.map