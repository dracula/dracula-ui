import React from 'react'

import { Card, Heading, Box, BoxProps } from '../../..'
import { Avatar } from '../../Avatar/Avatar'
import { Text } from '../../Typography/Text'
import { colors } from '../../Color/Box'

export default {
  title: 'Card'
}

const Crd: React.FC<{ color: BoxProps['color'] }> = ({ color }) => {
  const accentColor = color === 'black' ? 'white' : 'black'

  return (
    <Card color={color} spacing={['small']} style={{ margin: '2rem' }}>
      <Heading color={accentColor} size="heading-3" spacing="medium">
        How to kill Vampires
      </Heading>

      <Box style={{ maxWidth: 300 }} spacing="mediumX">
        <Text color={accentColor}>
          Depending on the vampire’s power level, they may be able to resist
          sunlight exposure.
        </Text>
      </Box>

      <Box spacing="medium" style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          title="Wesley Snipes"
          src="https://img1.looper.com/img/gallery/wesley-snipes-has-something-to-say-about-the-latest-blade-news/intro-1563907716.jpg"
          themeColor={accentColor}
        />

        <Box
          spacing="small"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Text color={accentColor}>Author</Text>
          <Text color={accentColor} weight="semibold">
            Wesley Snipes
          </Text>
        </Box>
      </Box>
    </Card>
  )
}

export const Cards = () => {
  return (
    <Box
      color="black"
      spacing="large"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {Object.keys(colors).map(color => (
        <Crd color={color as BoxProps['color']} />
      ))}
    </Box>
  )
}
