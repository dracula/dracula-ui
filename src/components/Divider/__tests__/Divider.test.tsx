import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { baseColors } from '@/base/colors'
import { Divider, DividerProps } from '@/components/Divider/Divider'

docs(Divider, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Dividers are used to defined a thematic break in a page.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Dividers can be customized to use any of the Dracula UI theme colors.'
      )
    ]
  }
})

function Usage() {
  return (
    <Divider />
  )
}

function Colors() {
  return (
    <Box>
      {Object.keys(baseColors).map((color) => {
        return (
          <Box key={color} mb="sm">
            <Divider color={color as DividerProps['color']} />
          </Box>
        )
      })}
    </Box>
  )
}