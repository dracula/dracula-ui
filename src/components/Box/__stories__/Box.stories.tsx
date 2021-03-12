import React from 'react'
import { BoxProps, Box, roundedBorders } from '@/index'
import { colors } from '@/base/colors'

export default {
  title: 'Boxes'
}

export const Boxes = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {Object.keys(colors).map((color) => {
          return (
            <Box
              key={color}
              color={color as BoxProps['color']}
              style={{
                width: 250,
                height: 250,
                borderRadius: 20,
                marginRight: 20
              }}
            />
          )
        })}
      </div>

      <div>
        <Box as="button" color="pinkPurple">
          Button
        </Box>

        <Box as="a" color="green" href="#">
          Link
        </Box>

        <Box as="h4" color="orange">
          h4
        </Box>
      </div>
    </div>
  )
}

export const BoxRounded = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.keys(roundedBorders).map((rounded) => {
        return (
          <Box
            key={rounded}
            color={"purple" as BoxProps['color']}
            rounded={rounded as BoxProps['rounded']}
            style={{
              width: 250,
              height: 250,
              marginRight: 20
            }}
          />
        )
      })}
    </div>
  )
}