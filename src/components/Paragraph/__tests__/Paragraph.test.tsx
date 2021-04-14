import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Paragraph } from '@/components/Paragraph/Paragraph'

docs(Paragraph, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Show a paragraph within an interface.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Paragraphs can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Weights',
        Weights,
        'Paragraphs can be defined in different font weights.'
      ),
      snapshot(
        'Sizes',
        Sizes,
        'Paragraphs can be customize to use several different sizes.'
      ),
      snapshot(
        'Line Height',
        LineHeights,
        'Paragraphs can be controlled with different line heights.'
      )
    ]
  }
})

function Usage() {
  return (
    <Paragraph>Dracula is an 1897 Gothic horror novel by Irish author Bram Stoker. It introduced the character of Count Dracula and established many conventions of subsequent vampire fantasy. The novel tells the story of Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and Professor Abraham Van Helsing.</Paragraph>
  )
}

function Colors() {
  return (
    <Box>
      <Paragraph color="cyan">cyan</Paragraph>
      <Paragraph color="green">green</Paragraph>
    </Box>
  )
}

function Weights() {
  return (
    <Box>
      <Paragraph weight="normal">normal</Paragraph>
      <Paragraph weight="semibold">semibold</Paragraph>
      <Paragraph weight="bold">bold</Paragraph>
    </Box>
  )
}

function Sizes() {
  return (
    <Box>
      <Paragraph size="xs">xs</Paragraph>
      <Paragraph size="sm">sm</Paragraph>
      <Paragraph size="md">md</Paragraph>
      <Paragraph size="lg">lg</Paragraph>
    </Box>
  )
}

function LineHeights() {
  return (
    <Box>
      <Paragraph color="red">xs</Paragraph>
      <Paragraph lineHeight="xs">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

      <Paragraph color="orange">sm</Paragraph>
      <Paragraph lineHeight="sm">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

      <Paragraph color="yellow">md</Paragraph>
      <Paragraph lineHeight="md">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

      <Paragraph color="pink">lg</Paragraph>
      <Paragraph lineHeight="lg">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>

      <Paragraph color="cyan">xl</Paragraph>
      <Paragraph lineHeight="xl">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.</Paragraph>
    </Box>
  )
}