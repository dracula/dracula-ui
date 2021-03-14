import { Box, Heading, List, Link } from "../../dist"
import dspComponents from "../../dsp/data/components.json"
import NextLink from "next/link"
import React from "react"
import Topbar from "./Topbar"

const pages = dspComponents.entities.map((entity) => {
  return entity.name
})

const Navigation = () => {
  const items = [
    {
      title: "Intro",
      pages: ["Welcome", "Usage", "Why"]
    },
    {
      title: "Components",
      pages
    },
    {
      title: "Patterns",
      pages: [
        "Blog",
        "Contact",
        "ECommerce",
        "Feature",
        "Footer",
        "Pricing",
        "Hero"
      ]
    }
  ]
  return (
    <nav
      style={{
        position: "fixed",
        height: "100vh",
        minWidth: 300,
        overflow: "auto"
      }}
    >
      <Topbar />
      {items.map((item) => {
        return (
          <Box key={item.title} spacing={["mediumX", "smallY"]}>
            <Heading
              size="heading-4"
              color="purpleCyan"
              style={{ textTransform: "uppercase" }}
            >
              {item.title}
            </Heading>
            <List variant="none">
              {Object.keys(item.pages).map((index) => {
                const path = `/${item.pages[index].toLowerCase()}`
                return (
                  <Box as="li" key={index} spacing="xxsY">
                    <NextLink href={path}>
                      <Link
                        href={path}
                        style={{ textDecoration: "none" }}
                        hoverColor="purpleCyan"
                      >
                        {item.pages[index]}
                      </Link>
                    </NextLink>
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
