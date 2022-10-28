import { Anchor, Box, Heading, Paragraph } from 'dracula-ui'

import Docs from '../layouts/Docs'
import React from 'react'
import styles from './index.module.css'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Design',
        description: 'How to use Dracula UI on Figma.'
      }
    }
  }
}

class Design extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading as="h2" size="xl">
            Using Figma
          </Heading>
          <Paragraph>
            To facilitate the communication between designers and developers, we
            decided to build all Dracula UI components on Figma.
          </Paragraph>
          <Paragraph>
            You can find the <code>.fig</code> file inside the{' '}
            <Anchor
              target="_blank"
              href="https://github.com/dracula/dracula-ui/tree/main/design"
            >
              design
            </Anchor>{' '}
            folder.
          </Paragraph>
          <img
            className={styles.image}
            src="/static/images/design-1.png"
            alt="Dracula UI on Figma"
          />
        </Box>
      </Box>
    )
  }
}

Design.Layout = Docs

export default Design
