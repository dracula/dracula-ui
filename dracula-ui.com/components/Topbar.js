import { Box, Text } from "../../dist"
import { Component } from "react"
import Link from "next/link"

class Topbar extends Component {
  render() {
    return (
      <Box p="md">
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <Text size="large">Dracula</Text>
            <Text size="large" color="purple">
              {" "}
              UI
            </Text>
          </a>
        </Link>
      </Box>
    )
  }
}

export default Topbar
