import { Box, Text, Anchor } from "@dracula/dracula-ui"
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
          marginLeft: 12
        }}
      >
        <Link href="/">
          <Anchor className={styles.title}>
            <Text className={styles.text}>Dracula</Text>
            <Text className={styles.text} color="purpleCyan">
              {" "}
              UI
            </Text>
          </Anchor>
        </Link>

        <AccentColorPicker />
      </Box>
    )
  }
}

export default Topbar
