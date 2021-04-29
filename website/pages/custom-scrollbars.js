import React from 'react'
import { Box, Heading, Paragraph } from '@dracula/dracula-ui'
import Docs from '../layouts/Docs'

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'Custom Scrollbars',
        description:
          'Here is a brief explanation of how to use custom scrollbars when creating with Dracula UI.'
      }
    }
  }
}

class CustomScrollbars extends React.Component {
  render() {
    return (
      <Box>
        <Box my="lg">
          <Heading as="h2" size="xl">
            Why
          </Heading>
          <Paragraph>
            When creating with Dracula Ui, you are creating with a dark theme.
            Most browsers and systems are usually optimized for light and not
            dark user interfaces.
          </Paragraph>
          <Paragraph>
            In addition to personalizing the scrollbars, it can create a greater
            immersion, and give the user the feeling of a strong and planned
            visual identity.
          </Paragraph>
        </Box>
        <Box my="lg">
          <Heading as="h2" size="xl" color="cyan">
            How do they work?
          </Heading>
          <Paragraph>
            When building your application/website, it is possible to adopt
            scrollbars with custom styles.
          </Paragraph>
          <Paragraph>
            For that, it is necessary to add a class to the element that you
            want to adopt this style, as these scrollbars are not applied by
            default.
          </Paragraph>
          <Paragraph>Add the class below:</Paragraph>
          <Paragraph>
            <code>.drac-custom-scrollbar</code>
          </Paragraph>
          <Paragraph>
            This CSS class will add custom scrollbars in WebKit-based browsers,
            such as Google Chrome, Microsoft Edge (new), Safari, etc; Only in
            panoramic orientation, as portrait orientation does not have
            scrollbars visible by default.
          </Paragraph>
          <Paragraph>
            The scrollbars with custom style, change their appearance based on
            the CSS variables below:
          </Paragraph>
          <Paragraph>
            <List color="white" variant="ordered">
              <li className="drac-text drac-text-white">
                <code>--custom-scrollbar-bg</code> - Change the background
                colour of the scrollbar.
              </li>
              <li className="drac-text drac-text-white">
                <code>--custom-scrollbar-border</code> - Changes the colour of
                the scrollbar border.
              </li>
              <li className="drac-text drac-text-white">
                <code>--custom-scrollbar-thumb</code> - Change the colour of the
                bar.
              </li>
              <li className="drac-text drac-text-white">
                <code>--custom-scrollbar-thumb-hover</code> - Changes the colour
                of the scrollbar when the user interacts with it.
              </li>
            </List>
          </Paragraph>
        </Box>
      </Box>
    )
  }
}

CustomScrollbars.Layout = Docs

export default CustomScrollbars
