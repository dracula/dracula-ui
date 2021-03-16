import { Box, Text } from "../../dist"
import { Component } from "react"
import Link from "next/link"
import styles from "./Topbar.module.css"

class Topbar extends Component {
  render() {
    return (
      <Box p="md">
        <Link href="/">
          <a className={styles.title}>
            <Text className={styles.text}>Dracula</Text>
            <Text className={styles.text} color="purpleCyan"> UI</Text>
          </a>
        </Link>
      </Box>
    )
  }
}

export default Topbar
