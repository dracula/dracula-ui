import { Component } from "react"
import styles from "./Tabs.module.css"
import CodeHighlight from "./CodeHighlight"
import { Box, Tabs } from "dracula-ui"

class DocsTabs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        { label: "Preview", panel: this.props.section.html },
        { label: "HTML", panel: this.props.section.html },
        { label: "React", panel: this.props.section.react }
      ],
      selectedTab: 0
    }
  }

  onChangeSelectedTab(index) {
    this.setState({ selectedTab: index })
  }

  renderLabels() {
    return this.state.options.map((option, index) => {
      return (
        <li
          key={index}
          className={
            this.state.selectedTab === index ? styles.tabActive : styles.tab
          }
        >
          <a
            className="drac-tab-link drac-text"
            onClick={() => this.onChangeSelectedTab(index)}
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
            this.state.selectedTab === index
              ? styles.tabPanelActive
              : styles.tabPanel
          }
        >
          {this.renderPanel(index, option)}
        </div>
      )
    })
  }

  renderPanel(index, option) {
    if (index === 0) {
      return (
        <Box
          className={styles.usage}
          dangerouslySetInnerHTML={{ __html: option.panel }}
        />
      )
    } else if (index === 1) {
      return <CodeHighlight code={option.panel.trim()} language={"html"} />
    } else if (index === 2) {
      return <CodeHighlight code={option.panel.trim()} language={"jsx"} />
    }
  }

  render() {
    return (
      <div>
        <Tabs color="cyan">
          {this.renderLabels()}
        </Tabs>
        <Box className={styles.codeContainer}>
          {this.renderPanels()}
        </Box>
      </div>
    )
  }
}

export default DocsTabs
