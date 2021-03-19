import React from "react"
import Head from "next/head"
import Theme from "../layouts/Theme"
import { Box, Heading, Paragraph } from "../../dist"
import Navigation from "../components/Navigation"
import styles from "./index.module.css"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Spacing",
        description:
          "Learn how to use our spacing helpers to make margin and padding management easier."
      }
    }
  }
}

class Principles extends React.Component {
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
        </Head>

        <Box className={styles.container}>
          <Navigation selected={title} />
          <Box className={styles.content} py="lg">
            <main className={styles.center}>
              <Box>
                <Heading size="heading-1">{title}</Heading>
                <Paragraph className={styles.description} size="md">
                  {description}
                </Paragraph>
                <Box my="lg">
                  <Heading size="heading-2">Why</Heading>
                  <Paragraph>
                    Our mission is to unleash the creative potential in every
                    developer. We do that by providing modular components that
                    can be used to build modern sites faster.
                  </Paragraph>
                </Box>
              </Box>
            </main>
          </Box>
        </Box>
      </div>
    )
  }
}

Principles.Layout = Theme

export default Principles
