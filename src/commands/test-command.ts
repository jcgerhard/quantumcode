import * as vscode from 'vscode';

const testCommand = () => {
  //vscode.window.showInformationMessage('Test command...');
  //vscode.commands.executeCommand('workbench.action.openSettings', '@ext:jcgerhard.quantumcode');

  vscode.window.showInformationMessage(`Can't open Cloudflow manual!`, 'Check settings').then(() => {
    vscode.commands.executeCommand('workbench.action.openSettings', '@ext:jcgerhard.quantumcode');
  });
};

export default testCommand;
