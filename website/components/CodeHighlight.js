import React, { Component } from 'react'
import localStyles from './CodeHighlight.module.css'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from '../lib/prism'
import CopyToClipboard from 'clipboard'

import { Button } from '@dracula/dracula-ui'

class CodeHighlight extends Component {
  state = { visibility: 'hidden', copyText: 'copy' }
  copyButton = React.createRef()

  componentDidMount() {
    new CopyToClipboard(this.copyButton.current, {
      text: () => this.props.code
    })
  }

  onCopy = () => {
    const { code, language } = this.props

    analytics.track('Copied to Clipboard', { code, language })

    this.setState(
      {
        copyText: 'copied!'
      },
      () => {
        setTimeout(() => this.setState({ copyText: 'copy' }), 1000)
      }
    )
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
            <div style={{ position: 'relative' }}>
              <span className={localStyles.copyButtonContainer}>
                <Button
                  m="xs"
                  size="xs"
                  ref={this.copyButton}
                  style={{ visibility }}
                  aria-label="Copy to clipboard"
                  data-clipboard-text={this.props.code}
                  onClick={this.onCopy.bind(this)}
                >
                  {this.state.copyText}
                </Button>
              </span>
              <pre className={localStyles.pre} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        )}
      </Highlight>
    )
  }
}

export default CodeHighlight
