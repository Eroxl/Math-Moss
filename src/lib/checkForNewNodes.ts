import MathNode from "../types/MathNode";
import nodeSchemas from "./constants/nodeSchemas";

const checkForNewNodes = (content: string) => (
  Object.entries(nodeSchemas)
    .filter(([key]) => (
      key !== 'leaf'
      && key !== 'group'
    ))
    .map(([key, value]) => {
      const regex = new RegExp(
        value.bind || value.latex
          .replace(/({.*})/g, "")
          .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
        'g'
      );

      const match = regex.exec(content)

      if (!match) return;
    
      const newNodeArgs = Object.fromEntries(
        Object.keys(value.accepts)
          .map((key) => ([key, {
            type: 'leaf',
            args: {
              content: ''
            },
          }]))
      );

      console.log(newNodeArgs);

      const newNode = {
        type: key,
        args: newNodeArgs,
      };

      const before = content.slice(0, match.index);
      const after = content.slice(match.index + match[0].length);

      return [
        {
          type: 'leaf',
          args: {
            content: before,
          },
        },
        newNode,
        {
          type: 'leaf',
          args: {
            content: after,
          },
        },
      ]
    })
    .filter(Boolean)[0] as MathNode[] | []
);

export default checkForNewNodes;
