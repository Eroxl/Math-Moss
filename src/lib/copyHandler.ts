const getLatexTree = (element: HTMLElement): {
  latex: string;
  type: string;
}[] => {
  const latex = element.dataset.latex;

  if (!latex) {
    // Continue Traversing
    return Array.from(element.children as unknown as HTMLElement[])
      .flatMap(getLatexTree);
  }

  const argName = element.dataset.path?.split('.').slice(-1)[0];

  if (element.dataset.type === 'leaf') {
    // ~ Return if it's a leaf in the root
    if (!argName || /\d+/.test(argName)) return [{
      latex: (element.textContent || '').replace(' ', '\\ '),
      type: '',
    }]

    return [{
      latex: (element.textContent || '').replace(' ', '\\ '),
      type: argName,
    }]
  }

  const children = Array.from(element.children as unknown as HTMLElement[])
  const nodePath = element.dataset.path?.split('.').slice(-1)[0];

  if (children.length === 0) return [{
    latex,
    type: nodePath || ''
  }];

  const childrenLatex = Object.fromEntries(
    children
      .flatMap(getLatexTree)
      .map(({ latex, type }) => [type, latex])
  );

  const insertedLatex = latex.replace(/{(\w+)}/g, (_, key) => {
    return `{${childrenLatex[key] || ''}}`;
  });

  return [{
    latex: insertedLatex,
    type: nodePath || '',
  }];
};

const copyHandler = (event: ClipboardEvent) => {
  const selection = window.getSelection();

  if (!selection) return;

  const range = selection.getRangeAt(0);

  if (!range) return;
  
  const selectedElements = range.cloneContents().children;

  if (!selectedElements) return;

  const latex = Array.from(selectedElements as unknown as HTMLElement[])
    .flatMap(getLatexTree)
    .map(({ latex }) => latex)
    .join('');

  event.preventDefault();
  event.clipboardData?.setData('text/plain', latex);
}

export default copyHandler;
