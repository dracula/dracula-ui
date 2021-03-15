import { Box, Heading, List, Link } from "../../dist"
import dspComponents from "../../dsp/data/components.json"
import NextLink from "next/link"
import React from "react"
import Topbar from "./Topbar"

const pages = dspComponents.entities.map((entity) => {
  return entity.name
})

const Navigation = ({ selected }) => {
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
          <Box key={item.title} px="md" py="sm">
            <Heading size="heading-4" color="pinkPurple">
              {item.title}
            </Heading>
            <List variant="none">
              {Object.keys(item.pages).map((index) => {
                const path = `/${item.pages[index].toLowerCase()}`
                const isSelected = item.pages[index] === selected

                return (
                  <Box as="li" key={index} py="xxs">
                    <NextLink href={path}>
                      <Link
                        href={path}
                        style={{ textDecoration: "none" }}
                        color={isSelected ? "white" : "blackSecondary"}
                        weight={isSelected ? "bold" : "normal"}
                        size={isSelected ? "normal" : "small"}
                        hoverColor="white"
                      >
                        {isSelected && "> "}
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
