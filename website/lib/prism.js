/**
 * Built on top of the original theme
 *
 * https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/dracula.js
 */

const theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282a36",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "hsl(250, 100%, 75%)",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "hsl(115, 100%, 75%)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "hsl(10, 100%, 75%)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "hsl(35, 100%, 75%)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)",
      },
    },
    {
      types: ["string", "char", "selector", "attr-value"],
      style: {
        color: "hsl(60, 100%, 75%)",
      },
    },
    {
      types: ["keyword", "variable", "tag"],
      style: {
        color: "hsl(330, 100%, 75%)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "hsl(250, 25%, 55%)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "hsl(115, 100%, 75%)",
      },
    },
    {
      types: ["atrule"],
      style: {
        color: "hsl(170, 100%, 75%)",
      },
    },
  ],
};

export default theme;