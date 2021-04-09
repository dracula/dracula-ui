import { Anchor, Box, List, Text } from "@dracula/dracula-ui"
import Link from "next/link"
import React from "react"
import dspComponents from "@dracula/dracula-ui/dsp/data/components.json"
import styles from "./Navigation.module.css"
import Topbar from "./Topbar"

const pages = dspComponents.entities.map((entity) => {
  return entity.name
})

const Navigation = ({ selected }) => {
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
  return (
    <nav className={styles.nav}>
      <Topbar />
      {items.map((item) => {
        return (
          <Box key={item.title} px="md" py="sm">
            <Text size="small" className={styles.navSectionTitle}>
              {item.title}
            </Text>
            <List variant="none">
              {Object.keys(item.pages).map((index) => {
                const path = `/${item.pages[index].toLowerCase()}`
                const isSelected = item.pages[index] === selected

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
      })}
    </nav>
  )
}

export default Navigation
