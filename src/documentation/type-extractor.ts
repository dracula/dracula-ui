import * as ts from 'typescript'

export function extractWithComment(
  fileNames: string[],
  options: ts.CompilerOptions
): void {
  const program = ts.createProgram(fileNames, options)
  const checker: ts.TypeChecker = program.getTypeChecker()

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      ts.forEachChild(sourceFile, visit)
    }
  }

  function visit(node: ts.Node) {
    const count = node.getChildCount()

    if (count > 0) {
      ts.forEachChild(node, visit)
    }

    if (ts.isInterfaceDeclaration(node) && node.name) {
      const symbol = checker.getSymbolAtLocation(node.name)
      if (symbol) {
        return serializeSymbol(symbol)
      }
    }
  }

  function serializeSymbol(symbol: ts.Symbol) {
    const s = {
      name: symbol.getName(),
      comment: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
      type: checker.typeToString(
        checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
      )
    }
    console.log(s)
    return s
  }
}

console.log(extractWithComment(['src/components/Avatar/Avatar.tsx'], {}))
