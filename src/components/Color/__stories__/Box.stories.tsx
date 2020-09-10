import React from 'react'
import { BoxProps, Box, colors } from '@/index'

export default {
  title: 'Boxes'
}

export const Boxes = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {Object.keys(colors).map(color => {
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
  )
}
