"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const open_cloudflow_manual_1 = require("./commands/open-cloudflow-manual");
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "quantumcode" is now active!');
    let commandOpenCloudflowManual = vscode.commands.registerCommand('quantumcode.openCloudflowManual', () => {
        (0, open_cloudflow_manual_1.default)();
    });
    context.subscriptions.push(commandOpenCloudflowManual);
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map