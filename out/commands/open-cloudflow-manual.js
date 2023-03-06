"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const quantumlib_1 = require("quantumlib");
const openCloudflowManual = () => {
    const cloudflowBaseUrl = vscode.workspace
        .getConfiguration('quantumcode.cloudflow')
        .get('cloudflowBaseUrl');
    if (cloudflowBaseUrl) {
        vscode.env.openExternal(vscode.Uri.parse(quantumlib_1.cloudflow.getManualURL(cloudflowBaseUrl)));
    }
    else {
        vscode.window.showErrorMessage(`Can't open Cloudflow manual! Please check the settings!`);
    }
};
exports.default = openCloudflowManual;
//# sourceMappingURL=open-cloudflow-manual.js.map