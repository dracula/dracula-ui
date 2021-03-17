import { Box, Text } from "../../dist"
import { Component } from "react"
import Link from "next/link"
import styles from "./Topbar.module.css"
import { AccentColorPicker } from "./AccentColorPicker"

class Topbar extends Component {
  render() {
    return (
      <Box
        p="md"
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          marginLeft: 12
        }}
      >
        <Link href="/">
          <a className={styles.title}>
            <Text className={styles.text}>Dracula</Text>
            <Text className={styles.text} color="purpleCyan">
              {" "}
              UI
            </Text>
          </a>
        </Link>

        <AccentColorPicker />
      </Box>
    )
  }
}

export default Topbar
