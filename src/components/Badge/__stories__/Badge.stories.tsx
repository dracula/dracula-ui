import React from 'react'
import { colors } from '@/base/colors'
import { Box } from '@/components/Box/Box'
import { Text } from '@/components/Typography/Text'
import { Badge, BadgeProps, Heading } from '@/index'

export default {
  title: 'Badge'
}

const boxStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '1rem',
  flex: 1
}

export const Badges = () => (
  <Box color="black" style={{ padding: '1rem 2rem' }}>
    <Heading
      size="heading-2"
      color="white"
      style={{ padding: 0, marginTop: 0 }}
    >
      .drac-badge
    </Heading>

    {Object.keys(colors).map((color) => {
      return (
        <div key={color} style={{ display: 'flex' }}>
          <Box style={boxStyle}>
            <Text color="white">.drac-badge .{colors[color]}</Text>
            <Badge
              themeColor={color as BadgeProps['themeColor']}
              style={{ margin: '1rem' }}
            >
              Normal
            </Badge>
          </Box>

          <Box style={boxStyle}>
            <Text color="white">.drac-badge-subtle.{colors[color]}</Text>
            <Badge
              themeColor={color as BadgeProps['themeColor']}
              style={{ margin: '1rem' }}
              variant="subtle"
            >
              Subtle
            </Badge>
          </Box>

          <Box style={boxStyle}>
            <Text color="white">.drac-badge-outline .{colors[color]}</Text>
            <Badge
              themeColor={color as BadgeProps['themeColor']}
              style={{ margin: '1rem' }}
              variant="outline"
            >
              Outline
            </Badge>
          </Box>
        </div>
      )
    })}
  </Box>
)
