import * as vscode from 'vscode';
import { cloudflow } from 'quantumlib';

const openCloudflowManual = (): void => {
  const cloudflowBaseUrl: string | undefined = vscode.workspace
    .getConfiguration('quantumcode.cloudflow')
    .get('cloudflowBaseUrl');

  if (cloudflowBaseUrl) {
    vscode.env.openExternal(vscode.Uri.parse(cloudflow.getManualURL(cloudflowBaseUrl)));
  } else {
    vscode.window.showErrorMessage(`Cannot open Cloudflow manual!`, 'Check URL settings').then(() => {
      vscode.commands.executeCommand('workbench.action.openSettings', '@ext:jcgerhard.quantumcode');
    });
  }
};

export default openCloudflowManual;
