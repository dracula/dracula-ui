import React from "react"
import Head from "next/head"
import Theme from "../layouts/Theme"
import { Box, Heading, Paragraph } from "../../dist"
import CodeHighlight from "../components/CodeHighlight"
import Navigation from "../components/Navigation"
import styles from "./index.module.css"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Installation',
        description: 'How to install and set up Dracula UI in your project'
      }
    }
  }
}

class Installation extends React.Component {
  render() {
    const { title, description } = this.props.query;

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
                <Heading size="heading-1">{title}</Heading>
                <Paragraph className={styles.description} size="md">{description}</Paragraph>
                <Box my="lg">
                  <Heading size="heading-2">Getting set up</Heading>
                  <Paragraph>Inside your project directory, install Dracula UI by running either of the following:</Paragraph>
                  <CodeHighlight language="bash" code={`npm install dracula/dracula-ui#alpha

yarn add dracula/dracula-ui#alpha`} />
                </Box>
                <Box my="lg">
                  <Heading size="heading-2">Using with HTML</Heading>
                  <Paragraph>You can use Dracula UI with plain HTML by importing the CSS file.</Paragraph>
                  <CodeHighlight language="html" code={`<link rel="stylesheet" href="node_modules/dracula-ui/styles/dracula-ui.css" />`} />
                  <Paragraph>Now you can take advantage of all the classes, for example:</Paragraph>
                  <CodeHighlight language="html" code={`<body class="drac-bg-black">`} />
                </Box>
                <Box my="lg">
                  <Heading size="heading-2">Using with React</Heading>
                  <Paragraph>You can also use Dracula UI with React by importing the JS package.</Paragraph>
                  <CodeHighlight language="jsx" code={`import { Component } from 'react'
import { Paragraph } from 'dracula-ui'

class Footer extends Component {
  render() {
    return <Paragraph>Made using Dracula</Paragraph>
  }
}

export default Footer`} />
                </Box>
                <Box my="lg">
                  <Heading size="heading-2">Using with Next.js</Heading>
                  <Paragraph>First, you need to import the CSS globally.</Paragraph>
                  <Paragraph>Go to <code>pages/_app.js</code> (or create this file if it doesn't exist yet) and add the CSS import:</Paragraph>
                  <CodeHighlight language="jsx" code={`import "dracula-ui/styles/dracula-ui.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp`} />
                  <Paragraph>Then you can import and use Dracula UI's React components as expected.</Paragraph>
                  <CodeHighlight language="jsx" code={`import { Component } from 'react'
import { Paragraph } from 'dracula-ui'

class Footer extends Component {
  render() {
    return <Paragraph>Made using Dracula</Paragraph>
  }
}

export default Footer`} />
                </Box>
              </Box>
            </main>
          </Box>
        </Box>
      </div>
    )
  }
}

Installation.Layout = Theme

export default Installation
