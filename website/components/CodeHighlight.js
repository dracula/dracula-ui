import React, { Component } from 'react'
import localStyles from './CodeHighlight.module.css'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from '../lib/prism'
import ClipBoard from 'clipboard'

import { Button } from '@dracula/dracula-ui'

class CodeHighlight extends Component {
  state = { visibility: 'hidden' }
  copyButton = React.createRef()

  componentDidMount() {
    const clipboard = new ClipBoard(this.copyButton.current, {
      text: (trigger) => this.props.code
    })
  }

  render() {
    const visibility = this.state.visibility
    return (
      <Highlight
        {...defaultProps}
        language={this.props.language}
        theme={theme}
        code={this.props.code}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <div
            onMouseEnter={() => this.setState({ visibility: 'visible' })}
            onMouseLeave={() => this.setState({ visibility: 'hidden' })}
          >
            <pre className={localStyles.pre} style={style}>
              <span className={localStyles.copyButtonContainer}>
                <Button
                  m="sm"
                  size="sm"
                  ref={this.copyButton}
                  style={{ visibility }}
                  aria-label="Copy code to clipboard"
                  data-clipboard-text={this.props.code}
                >
                  Copy
                </Button>
              </span>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    )
  }
}

export default CodeHighlight
