import { Anchor, Box, List, Text } from "@dracula/dracula-ui"
import { Component } from "react"
import Link from "next/link"
import dspComponents from "@dracula/dracula-ui/dsp/data/components.json"
import styles from "./Navigation.module.css"
import Topbar from "./Topbar"

const pages = dspComponents.entities.map((entity) => {
  return entity.name
})

const items = [
  {
    title: "Getting Started",
    pages: [
      "Installation",
      "Principles",
      "Tooling",
      "Design",
      "Support",
      "Spacing",
      "Colors"
    ]
  },
  {
    title: "Components",
    pages
  }
]

class Navigation extends Component {
  state = {
    isVisible: true
  }

  toggleMenu() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  renderNavigation() {
    return items.map((item) => {
      return (
        <Box key={item.title} px="md" py="sm" style={{ display: this.state.isVisible ? 'block' : 'none' }}>
          <Text size="sm" className={styles.navSectionTitle}>
            {item.title}
          </Text>
          <List variant="none">
            {Object.keys(item.pages).map((index) => {
              const path = `/${item.pages[index].toLowerCase()}`
              const isSelected = item.pages[index] === this.props.selected

              return (
                <Box as="li" key={index}>
                  <Link href={path} passHref>
                    <Anchor
                      size={"normal"}
                      className={
                        isSelected
                          ? styles.navSectionListActive
                          : styles.navSectionList
                      }
                    >
                      {item.pages[index]}
                    </Anchor>
                  </Link>
                </Box>
              )
            })}
          </List>
        </Box>
      )
    })
  }

  render() {
    return (
      <nav className={styles.nav}>
        <Topbar toggleMenu={this.toggleMenu.bind(this)} />
        {this.renderNavigation()}
      </nav>
    )
  }
}

export default Navigation
