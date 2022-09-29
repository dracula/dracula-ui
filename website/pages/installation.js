import React from "react"
import { Anchor, Box, Heading, Paragraph } from "dracula-ui"
import CodeHighlight from "../components/CodeHighlight"
import styles from "./index.module.css"
import Docs from "../layouts/Docs"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Installation",
        description: "How to install and set up Dracula UI in your project."
      }
    }
  }
}

class Installation extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading size="heading-2">Installing the package</Heading>
          <Paragraph>
            Inside your project directory, install Dracula UI by running
            either of the following:
          </Paragraph>
          <CodeHighlight
            language="bash"
            code={`npm install dracula-ui

yarn add dracula-ui`}
          />
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Using with HTML</Heading>
          <Paragraph>
            You can use Dracula UI with plain HTML by importing the CSS
            file.
          </Paragraph>
          <CodeHighlight
            language="html"
            code={`<link rel="stylesheet" href="node_modules/dracula-ui/styles/dracula-ui.css" />`}
          />
          <Paragraph>
            Now you can take advantage of all the classes, for example:
          </Paragraph>
          <CodeHighlight
            language="html"
            code={`<p class="drac-text drac-text-black">Hello Vampire</p>`}
          />
          <Paragraph>
            <Anchor href="https://github.com/dracula/dracula-ui/tree/main/examples/with-html">See full example</Anchor>
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Using with React</Heading>
          <Paragraph>
            You can also use Dracula UI with React by importing the JS
            package.
          </Paragraph>
          <CodeHighlight
            language="jsx"
            code={`import 'dracula-ui/styles/dracula-ui.css'
import { Paragraph } from 'dracula-ui'

function App() {
  return <Paragraph color="black">Hello Vampire</Paragraph>
}

export default App;
`}
          />
          <Paragraph>
            <Anchor href="https://github.com/dracula/dracula-ui/tree/main/examples/with-react">See full example</Anchor>
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Using with Next.js</Heading>
          <Paragraph>
            First, you need to import the CSS globally.
          </Paragraph>
          <Paragraph lineHeight="large">
            Go to <code>pages/_app.js</code> (or create this file if it
            doesn't exist yet) and add the CSS import:
          </Paragraph>
          <CodeHighlight
            language="jsx"
            code={`import 'dracula-ui/styles/dracula-ui.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp`}
          />
          <Paragraph>
            Then you can import and use Dracula UI's React components as
            expected.
          </Paragraph>
          <CodeHighlight
            language="jsx"
            code={`import { Component } from 'react'
import { Paragraph } from 'dracula-ui'

class Index extends Component {
  render() {
    return <Paragraph color="black">Hello Vampire</Paragraph>
  }
}

export default Index`}
          />
          <Paragraph>
            <Anchor href="https://github.com/dracula/dracula-ui/tree/main/examples/with-next">See full example</Anchor>
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Using with Jekyll</Heading>
          <Paragraph>
            Go to <code>_config.yml</code> and include the <code>node_modules</code> folder:
          </Paragraph>
          <CodeHighlight
            language="yaml"
            code={`include:
- node_modules`}
          />
          <Paragraph>
            Create a Sass file at <code>assets/css/styles.scss</code> with the following content:
          </Paragraph>
          <CodeHighlight
            language="scss"
            code={`---
---
@import "../../node_modules/dracula-ui/styles/dracula-ui.css"`}
          />
          <Paragraph>
            The empty front matter at the top tells Jekyll it needs to process the Dracula UI file.
            </Paragraph>
          <Paragraph>
            Finally, include the compiled CSS file into your <code>_layouts</code>.
          </Paragraph>
          <CodeHighlight
            language="html"
            code={`<link rel="stylesheet" href="/assets/css/styles.css">`}
          />
          <Paragraph>
            <Anchor href="https://github.com/dracula/dracula-ui/tree/main/examples/with-jekyll">See full example</Anchor>
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

Installation.Layout = Docs

export default Installation
