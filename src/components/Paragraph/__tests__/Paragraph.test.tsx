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
      ),
      snapshot(
        'Line Height',
        () => (
          <Box>
            <Paragraph color="red">none</Paragraph>
            <Paragraph lineHeight="none">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

            <Paragraph color="orange">small</Paragraph>
            <Paragraph lineHeight="small">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

            <Paragraph color="yellow">normal</Paragraph>
            <Paragraph lineHeight="normal">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

            <Paragraph color="pink">medium</Paragraph>
            <Paragraph lineHeight="medium">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

            <Paragraph color="cyan">large</Paragraph>
            <Paragraph lineHeight="large">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

            <Paragraph color="green">xlarge</Paragraph>
            <Paragraph lineHeight="xlarge">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>
          </Box>
        ),
        'Paragraphs can be controlled with different line heights.'
      )
    ]
  }
})
