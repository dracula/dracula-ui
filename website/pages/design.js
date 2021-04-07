import Head from "next/head"
import React from "react"
import { Box, Heading, Paragraph } from "@dracula/dracula-ui"
import Navigation from "../components/Navigation"
import Theme from "../layouts/Theme"
import styles from "./index.module.css"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Design",
        description: "How to use Dracula UI on Figma"
      }
    }
  }
}

class Design extends React.Component {
  render() {
    const { title, description } = this.props.query

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Netto Farah &amp; Zeno Rocha" name="author" />
        </Head>

        <Box className={styles.container}>
          <Navigation selected={title} />
          <Box className={styles.content} py="lg">
            <main className={styles.center}>
              <Box>
                <Heading as="h1" size="2xl">{title}</Heading>
                <Paragraph className={styles.description} size="md">
                  {description}
                </Paragraph>
                <Box my="lg">
                  <Heading as="h2" size="xl">Using Figma</Heading>
                  <Paragraph>
                    To facilitate the communication between between designers
                    and developers, we decided to build all Dracula UI
                    components on Figma.
                  </Paragraph>
                  <Paragraph>
                    You can find the <code>.fig</code> file inside the "design"
                    folder.
                  </Paragraph>
                  <img
                    className={styles.image}
                    src="/static/images/design-1.png"
                    alt="Dracula UI on Figma"
                  />
                </Box>
              </Box>
            </main>
          </Box>
        </Box>
      </div>
    )
  }
}

Design.Layout = Theme

export default Design
