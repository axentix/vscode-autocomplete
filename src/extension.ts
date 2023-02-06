// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import autocomplete from "./axentix";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated

  let disposable = vscode.commands.registerCommand(
    "axentix.autocomplete",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Code fast with Axentix 🔥");
    }
  );

  context.subscriptions.push(disposable);

  const completionItemProvider =
    vscode.languages.registerCompletionItemProvider(
      "html",
      new AxentixClassCompletionItemProvider(),
      "."
    );

  context.subscriptions.push(completionItemProvider);
}

// This method is called when your extension is deactivated
export function deactivate() {}

class AxentixClassCompletionItemProvider
  implements vscode.CompletionItemProvider
{
  public provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.CompletionItem[] {
    // Liste des classes CSS de base

    const classes = autocomplete;

    // Classes spécifiques pour certaines balises

    // Génération de la liste d'éléments d'autocompletion
    const completionItems = classes.map((className) => {
      const completionItem = new vscode.CompletionItem(className);
      completionItem.insertText = className;
      completionItem.documentation = new vscode.MarkdownString(
        `Class CSS: \`.${className}\``
      );
      return completionItem;
    });

    return completionItems;
  }
}
