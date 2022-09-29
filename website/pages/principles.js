import React from "react"
import { Box, Heading, Paragraph } from "dracula-ui"
import Docs from "../layouts/Docs"

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: "Principles",
        description:
          "Here are a set of principles in which we're creating Dracula UI."
      }
    }
  }
}

class Principles extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading as="h2" size="xl">Why</Heading>
          <Paragraph>
            Our mission is to unleash the creative potential in every
            developer. We do that by providing modular components that
            can be used to build modern sites faster.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="cyan">
            Built for Dark Mode
          </Heading>
          <Paragraph>
            Most templates are built using light colors and later on
            adapted to dark colors. Dark themes shouldn't be an
            afterthought, they should be a top priority.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="green">
            Designer Friendly
          </Heading>
          <Paragraph>
            Speed up the prototyping phase by using a highly
            configurable Design System. Collaborate easily by taking
            advantage of a carefully crafted Figma file.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="yellow">
            Great Developer Experience
          </Heading>
          <Paragraph>
            Don't worry about class names, just use the Visual Studio
            Code code snippets. You can take advantage of autocomplete
            and also access the entire documentation right from your
            code editor.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="orange">
            Enhanced Accessibility
          </Heading>
          <Paragraph>
            All accent colors are tested not only against the WCAG 2.1
            Level AA spec, but also WCAG Level AAA, which requires a
            contrast ratio of at least 7:1. This gives you the best
            readability possible.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="pink">
            Aesthetically Pleasing
          </Heading>
          <Paragraph>
            Gradients are a surprisingly versatile tool. They can
            introduce depth and dimension to your app. By using one of
            our well-designed gradients, you can subconsciously lead
            users toward the focal point.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="purple">
            Appealing Typography
          </Heading>
          <Paragraph>
            Good legibility is crucial to make sure the users can do
            their job well and with as little fatigue as possible. You
            can choose between different monospaced, serif, and
            sans-serif fonts.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Paragraph>
            We live in a portable world, so why user interfaces should
            be any different? We are starting small, but we believe that
            Dracula UI should be available everywhere.
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

Principles.Layout = Docs

export default Principles
