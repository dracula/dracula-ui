import Highlight, { defaultProps } from 'prism-react-renderer'
import React, { Component } from 'react'

import CopyToClipboard from 'clipboard'
import localStyles from './CodeHighlight.module.css'
import theme from '../lib/prism'

export default class CodeHighlight extends Component {
  state = { copied: false }
  copyButton = React.createRef()

  componentDidMount() {
    new CopyToClipboard(this.copyButton.current, {
      text: () => this.props.code
    })
  }

  onCopy = () => {
    this.setState(
      {
        copied: true
      },
      () => {
        setTimeout(() => this.setState({ copied: false }), 1000)
      }
    )
  }

  renderButton() {
    const { copied } = this.state

    return (
      <div className={localStyles.copyButtonContainer}>
        <button
          ref={this.copyButton}
          aria-label="Copy to clipboard"
          data-clipboard-text={this.props.code}
          onClick={this.onCopy}
          className={localStyles.copyButton}
        >
          <div className={localStyles.copyIcon}>
            <Clippy
              className={localStyles.clippy}
              style={{
                strokeDashoffset: copied ? -50 : 0
              }}
            />
            <Check
              className={localStyles.check}
              style={{
                strokeDashoffset: copied ? 0 : -50
              }}
            />
          </div>
        </button>
      </div>
    )
  }

  render() {
    return (
      <Highlight
        {...defaultProps}
        language={this.props.language}
        theme={theme}
        code={this.props.code}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <div>
            <div style={{ position: 'relative' }}>
              {this.renderButton()}
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

function Clippy(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.75 4.75H10.25V1.75H5.75V4.75Z" />
      <path d="M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379" />
    </svg>
  );
}

function Check(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.25 4.75L6 12L2.75 8.75" />
    </svg>
  );
}