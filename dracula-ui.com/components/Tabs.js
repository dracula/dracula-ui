import { Component } from "react"
import styles from "./Tabs.module.css"
import CodeHighlight from "./CodeHighlight"
import { Box } from "../../dist"

class Tabs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        { label: "HTML", panel: this.props.section.html },
        { label: "React", panel: this.props.section.react }
      ]
    }
  }

  renderLabels() {
    return this.state.options.map((option, index) => {
      return (
        <li
          key={index}
          className={
            this.props.selectedTab === index ? styles.tabActive : styles.tab
          }
        >
          <a
            className="drac-tab-link drac-text"
            onClick={() => this.props.onChangeSelectedTab(index)}
          >
            {option.label}
          </a>
        </li>
      )
    })
  }

  renderPanels() {
    return this.state.options.map((option, index) => {
      return (
        <div
          key={index}
          className={
            this.props.selectedTab === index
              ? styles.tabPanelActive
              : styles.tabPanel
          }
        >
          <CodeHighlight code={option.panel} language="html" />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <ul className="drac-tabs drac-tabs-purple">{this.renderLabels()}</ul>
        <Box style={{ maxHeight: 300, overflow: "auto" }}>
          {this.renderPanels()}
        </Box>
      </div>
    )
  }
}

export default Tabs
