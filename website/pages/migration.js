import React from "react"
import { Box, Heading, Paragraph } from "dracula-ui"
import CodeHighlight from "../components/CodeHighlight"
import Docs from "../layouts/Docs"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Migration",
        description: "How to migrate from the private package to the public package."
      }
    }
  }
}

class Migration extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading size="heading-2">Background</Heading>
          <Paragraph>
            When Dracula UI was first released as an early access project, it was hosted on GitHub's registry as a private package.
          </Paragraph>
          <Paragraph>
            This was a great way to get the project out there and get feedback from the community. However, it was not a great way to distribute the package since it required authentication to install.
          </Paragraph>
          <Paragraph>
            Here's how to migrate from the private package to the public package.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading size="heading-2">1. Remove .npmrc</Heading>
          <Paragraph>
            If you have a <Box as="code" className="drac-text-pink">.npmrc</Box> file in your project, remove it. This file is no longer needed.
          </Paragraph>
          <CodeHighlight
            code={`registry=https://registry.npmjs.org/
@dracula:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=ghp_riBdWlkWdgszbijvfqkhcCSTr3evT1f4RpWuW`}
          />
        </Box>
        <Box my="lg">
          <Heading size="heading-2">2. Update package.json</Heading>
          <Paragraph>
            Update your local package.json file to use the new package name which is <Box as="code" className="drac-text-pink">dracula-ui</Box> instead of <Box as="code" className="drac-text-pink">@dracula/dracula-ui</Box>.
          </Paragraph>
          <Paragraph>
            You'll also have to bump the version to <Box as="code" className="drac-text-pink">1.0.0</Box> which only contains the package rename and no breaking changes.
          </Paragraph>
          <CodeHighlight
            language="json"
            code={`{
  "dependencies": {
    "dracula-ui": "^1.0.0"
  }
}`}
          />
        </Box>
        <Box my="lg">
          <Heading size="heading-2">3. Rename imports</Heading>
          <Paragraph>
            Find and replace all instances of <Box as="code" className="drac-text-pink">@dracula/dracula-ui</Box> with <Box as="code" className="drac-text-pink">dracula-ui</Box>.
          </Paragraph>
          <CodeHighlight
            language="js"
            code={`import { Text } from 'dracula-ui'`}
          />
        </Box>
      </Box>
    )
  }
}

Migration.Layout = Docs

export default Migration
