import React from 'react'
import {
  Avatar,
  Box,
  BoxProps,
  Card,
  Heading,
  Paragraph,
  Text,
  CardProps,
  colors
} from '@/index'

export default {
  title: 'Card'
}

const Crd: React.FC<CardProps & {}> = ({ color, ...props }) => {
  let accentColor = color === 'black' ? 'white' : 'black'

  if (props.variant === 'subtle') {
    accentColor = color
    if (color === 'black') {
      accentColor = 'white'
    }
  }

  return (
    <Card
      color={color}
      spacing={['small']}
      style={{ margin: '2rem' }}
      {...props}
    >
      <Heading color={accentColor} size="heading-3" spacing="medium">
        How to kill Vampires
      </Heading>

      <Box spacing="mediumX">
        <Paragraph color={accentColor} style={{ paddingBottom: 0 }}>
          {`A half-mortal, half-immortal is out to avenge his mother's death and
          rid the world of vampires. The modern-day technologically advanced
          vampires he is going after are in search of his special blood type
          needed to summon an evil god who plays a key role in their plan to
          execute the human race.`.slice(
            0,
            props.orientation === 'normal' ? 120 : -1
          )}
          ...
        </Paragraph>
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
        <Crd
          style={{ width: '600px', margin: '2rem' }}
          color={color as BoxProps['color']}
          orientation="normal"
        />
      ))}
    </Box>
  )
}

export const Portrait = () => {
  return (
    <Box
      color="black"
      spacing="large"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {Object.keys(colors).map(color => (
        <Crd color={color as BoxProps['color']} orientation="portrait" />
      ))}
    </Box>
  )
}

export const Subtle = () => {
  return (
    <Box
      color="black"
      spacing="large"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {Object.keys(colors).map(color => (
        <Crd
          style={{ width: '600px', margin: '2rem' }}
          color={color as BoxProps['color']}
          variant="subtle"
        />
      ))}
    </Box>
  )
}
