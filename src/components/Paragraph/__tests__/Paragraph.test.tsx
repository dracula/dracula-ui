import React from 'react'
import { Paragraph } from '@/components/Paragraph/Paragraph'
import {
  ParagraphBasic,
  ParagraphColors,
  ParagraphSizes,
  ParagraphWeights
} from '@/components/Paragraph/__stories__/Paragraph.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'

docs(Paragraph, {
  basic() {
    return snapshot(
      'Usage',
      () => <Paragraph>basic</Paragraph>,
      'Show a paragraph within an interface.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        () => (
          <Box>
            <Paragraph color="cyan">cyan</Paragraph>
            <Paragraph color="green">green</Paragraph>
          </Box>
        ),
        'Paragraphs can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Weights',
        () => (
          <Box>
            <Paragraph weight="normal">normal</Paragraph>
            <Paragraph weight="semibold">semibold</Paragraph>
            <Paragraph weight="bold">bold</Paragraph>
          </Box>
        ),
        'Paragraphs can be defined in different font weights.'
      ),
      snapshot(
        'Sizes',
        () => (
          <Box>
            <Paragraph size="xsmall">xsmall</Paragraph>
            <Paragraph size="small">small</Paragraph>
            <Paragraph size="medium">medium</Paragraph>
            <Paragraph size="large">large</Paragraph>
          </Box>
        ),
        'Paragraphs can be customize to use several different sizes.'
      )
    ]
  }
})
