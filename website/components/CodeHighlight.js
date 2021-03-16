import { Component } from "react"
import localStyles from "./CodeHighlight.module.css"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "../lib/prism"

class CodeHighlight extends Component {
  render() {
    return (
      <Highlight
        {...defaultProps}
        language={this.props.language}
        theme={theme}
        code={this.props.code}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className={localStyles.pre} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default CodeHighlight
