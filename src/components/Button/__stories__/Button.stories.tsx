import React from 'react'
import { Button, ButtonProps, buttonVariants, Box } from '@/index'
import { colors } from '@/base/colors'

export default {
  title: 'Button'
}

export const ButtonNormal = () => {
  return <Button color={'purple' as ButtonProps['color']}>Normal</Button>
}

export const ButtonVariants = () => {
  return (
    <Box>
      {Object.keys(buttonVariants).map((variant) => {
        return (
          <Box key={variant} style={{ marginBottom: 10 }}>
            <Button
              variant={variant as ButtonProps['variant']}
              color={'purple' as ButtonProps['color']}
            >
              {variant}
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}

export const ButtonDisabled = () => {
  return (
    <Box>
      {Object.keys(buttonVariants).map((variant) => {
        return (
          <Box key={variant} style={{ marginBottom: 10 }}>
            <Button
              disabled
              variant={variant as ButtonProps['variant']}
              color={'purple' as ButtonProps['color']}
            >
              {variant}
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}

export const ButtonColors = () => {
  return (
    <Box>
      {Object.keys(colors).map((color) => {
        return (
          <Box
            key={color}
            style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <Button
              color={color as ButtonProps['color']}
              style={{ margin: '1rem' }}
            >
              Normal
            </Button>

            <Button
              color={color as ButtonProps['color']}
              style={{ margin: '1rem' }}
              variant="outline"
            >
              Outline
            </Button>

            <Button
              color={color as ButtonProps['color']}
              style={{ margin: '1rem' }}
              variant="ghost"
            >
              Ghost
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}
