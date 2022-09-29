import React from "react"
import { Anchor, Box, Heading, List, Paragraph } from "dracula-ui"
import styles from "./index.module.css"
import Docs from "../layouts/Docs"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Welcome",
        description: "Dracula UI is a dark-first collection of UI patterns and components."
      }
    }
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <img
            className={styles.banner}
            src="/static/og.jpg"
            alt="Dracula UI"
          />
        </Box>

        <Box my="lg">
          <Heading as="h2" size="xl" pb="md">Key Features</Heading>

          <Heading as="h3" size="md">Built for Dark Mode</Heading>
          <Paragraph>Most templates are built using light colors and later on adapted to dark colors. Dark themes shouldn't be an afterthought, they should be a top priority.</Paragraph>

          <Heading as="h3" size="md">Designer Friendly</Heading>
          <Paragraph>Speed up the prototyping phase by using a highly configurable Design System. Collaborate easily by taking advantage of a carefully crafted Figma file.</Paragraph>

          <Heading as="h3" size="md">Great Developer Experience</Heading>
          <Paragraph>Don't worry about class names, just use the Visual Studio Code snippets. You can take advantage of autocomplete and also access the entire documentation right from your code editor.</Paragraph>
        </Box>


        <Box my="lg">
          <Heading as="h2" size="xl">Useful Links</Heading>
          <List variant="unordered" color="white" p="none" mb="sm">
            <li><Anchor href="https://github.com/dracula/dracula-ui">GitHub</Anchor></li>
            <li><Anchor href="https://discord.gg/vyA9AdqdbK">Discord</Anchor></li>
            <li><Anchor href="https://github.com/dracula/dracula-ui/tree/main/design">Figma</Anchor></li>
            <li><Anchor href="https://github.com/dracula/dracula-ui/blob/main/LICENSE">License</Anchor></li>
          </List>

          <List variant="unordered" color="white" p="none">
            <li><Anchor href="mailto:zeno@draculatheme.com">Email</Anchor></li>
            <li><Anchor href="https://github.com/dracula/dracula-ui/issues">Issues</Anchor></li>
            <li><Anchor href="https://github.com/dracula/dracula-ui/discussions">Discussions</Anchor></li>
            <li><Anchor href="https://dracula-ui.releases.live">Changelog</Anchor></li>
          </List>
        </Box>
      </Box>
    )
  }
}

Welcome.Layout = Docs

export default Welcome
