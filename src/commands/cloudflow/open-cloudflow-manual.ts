import * as vscode from 'vscode';
import { cloudflow } from 'quantumlib';

const openCloudflowManual = (): void => {
  const cloudflowBaseUrl: string | undefined = vscode.workspace
    .getConfiguration('quantumcode.cloudflow')
    .get('cloudflowBaseUrl');

  if (cloudflowBaseUrl) {
    vscode.env.openExternal(vscode.Uri.parse(cloudflow.getManualURL(cloudflowBaseUrl)));
  } else {
    vscode.window.showErrorMessage(`Can't open Cloudflow manual! Please check the settings!`);
  }
};

export default openCloudflowManual;
