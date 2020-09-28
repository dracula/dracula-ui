import React from 'react'
import { Button, ButtonProps, buttonVariants, Box } from '@/index'
import { colors } from '@/base/colors'

export default {
  title: 'Button'
}

export const ButtonNormal = () => {
  return (
    <Box style={{ padding: '3rem' }}>
      <Button color={'purple' as ButtonProps['color']}>normal</Button>
    </Box>
  )
}

export const ButtonVariants = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
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

export const ButtonColors = () => (
  <Box style={{ padding: '1rem 2rem' }}>
    {Object.keys(colors).map((color) => {
      return (
        <Box key={color}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <Box>
              <Button
                color={color as ButtonProps['color']}
                style={{ margin: '1rem' }}
              >
                Normal
              </Button>

              <Button
                color={color as ButtonProps['color']}
                style={{ margin: '1rem' }}
                disabled
              >
                Normal
              </Button>
            </Box>

            <Box>
              <Button
                color={color as ButtonProps['color']}
                style={{ margin: '1rem' }}
                variant="ghost"
              >
                Ghost
              </Button>
              <Button
                color={color as ButtonProps['color']}
                style={{ margin: '1rem' }}
                variant="ghost"
                disabled
              >
                Ghost
              </Button>
            </Box>

            <Box>
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
                variant="outline"
                disabled
              >
                Outline
              </Button>
            </Box>
          </Box>
        </Box>
      )
    })}
  </Box>
)
