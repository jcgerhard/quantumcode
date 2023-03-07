import * as vscode from 'vscode';
import openCloudflowManual from './commands/cloudflow/open-cloudflow-manual';

export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  // console.log('Congratulations, your extension "quantumcode" is now active!');

  let commandOpenCloudflowManual = vscode.commands.registerCommand('quantumcode.openCloudflowManual', () => {
    openCloudflowManual();
  });

  context.subscriptions.push(commandOpenCloudflowManual);
}

// This method is called when your extension is deactivated
export function deactivate() {}
