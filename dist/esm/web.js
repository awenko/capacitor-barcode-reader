var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from "@capacitor/core";
import "webcodecamjs/js/qrcodelib";
// @ts-ignore
import WebCodeCamJS from "webcodecamjs/js/webcodecamjs";
//const WebCodeCamJS = require('webcodecamjs/js/webcodecamjs');
export class BarcodeReaderPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: "BarcodeReaderPlugin",
            platforms: ["web"]
        });
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                var div = document.createElement("div");
                div.id = "aw-CameraBarcodeScanner";
                div.style.position = "fixed";
                div.style.top = "0";
                div.style.left = "0";
                div.style.bottom = "0";
                div.style.right = "0";
                div.style.zIndex = "1";
                div.style.animationDuration = "0.2s";
                div.style.animationName = "_45aeb829";
                div.style.display = "flex";
                div.style.alignItems = "center";
                div.style.justifyContent = "center";
                div.style.padding = "3rem 2rem";
                div.innerHTML = `<div style ="
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            background-color: rgba(0, 0, 0, 0.15);"></div><div class="camera-wrapper" style="position: absolute;" >
                            <div class="camera-header"
                            style="color: rgb(255, 255, 255);background-color: rgb(0, 0, 0);height: 50px;">
                            <section class="items">
                                <div class="item close" style="text-align: left; "  >
                                        <img id="closeIcon" style = "widht: 1.5em; height: 1.5em; margin: 12px 0px 0px 12px;cursor: pointer;"
                                        src="data:image/svg+xml,%3Csvg version='1.1' 
                                        id='Layer_1' xmlns='http://www.w3.org/2000/svg' 
                                        xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' 
                                        viewBox='0 0 512 512' enable-background='new 0 0 512 512' 
                                        xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath 
                                        fill='%23FFFFFF' 
                                        d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E">
                                </div>
                                <div class="item flash"></div>
                            </section>
                        </div>
                            
                            <div class="camera-video" style="position: relative;flex: 1 1 0%;overflow: hidden;background-color: rgb(0, 0, 0);">
                                <canvas id="webcodecam-canvas" ></canvas></div>
                        
                        </div>
                        
                        
                        
                        `;
                document.body.appendChild(div);
                var closeIcon = document.querySelector("#closeIcon");
                closeIcon.addEventListener("click", closeCamera);
                /* -------------------------------------- Available parameters --------------------------------------*/
                var options = {
                    DecodeQRCodeRate: 5,
                    DecodeBarCodeRate: 5,
                    successTimeout: 500,
                    codeRepetition: true,
                    tryVertical: true,
                    frameRate: 15,
                    widht: 320,
                    height: 240,
                    // canvas height
                    constraints: {
                        // default constraints
                        video: {
                            mandatory: {
                                maxWidth: 1280,
                                maxHeight: 720
                            },
                            optional: [
                                {
                                    sourceId: true
                                }
                            ]
                        },
                        audio: false
                    },
                    flipVertical: false,
                    flipHorizontal: false,
                    zoom: -1,
                    beep: "audio/beep.mp3",
                    decoderWorker: "assets/workers/DecoderWorker.js",
                    brightness: 0,
                    autoBrightnessValue: false,
                    grayScale: false,
                    contrast: 0,
                    threshold: 0,
                    // to On declare matrix, example for sharpness ->  [0, -1, 0, -1, 5, -1, 0, -1, 0]
                    resultFunction: function (result) {
                        /*
                                      result.format: code format,
                                      result.code: decoded string,
                                      result.imgData: decoded image data
                                  */
                        var BarcodeReaderFoundResult = {
                            action: "found",
                            value: result.code
                        };
                        console.log(BarcodeReaderFoundResult);
                        document.body.removeChild(div);
                        decoder.stop();
                        resolve(BarcodeReaderFoundResult);
                    },
                    cameraSuccess: function () {
                        //callback funtion to camera success
                        console.log("cameraSuccess");
                    },
                    canPlayFunction: function () {
                        //callback funtion to can play
                        console.log("canPlayFunction");
                    },
                    getDevicesError: function (error) {
                        //callback funtion to get Devices error
                        console.log(error);
                    },
                    getUserMediaError: function (error) {
                        //callback funtion to get usermedia error
                        console.log(error);
                    },
                    cameraError: function (error) {
                        //callback funtion to camera error
                        console.log(error);
                    }
                };
                //new WebCodeCamJS('#webcodecam-canvas').init();
                /*------------------------ Example initializations jquery & Javascript version ------------------------*/
                var decoder = new WebCodeCamJS("#webcodecam-canvas");
                //decoder.init(arg);
                decoder
                    .buildSelectMenu(document.createElement("select"), "environment|back")
                    .init(options)
                    .play();
                function closeCamera() {
                    document.body.removeChild(div);
                    decoder.stop();
                }
            });
        });
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
//# sourceMappingURL=web.js.map