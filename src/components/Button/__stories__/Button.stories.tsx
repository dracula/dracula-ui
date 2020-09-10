import React from 'react'
import { Button, Heading, ButtonProps, Box, Text } from '@/index'
import { colors } from '@/base/colors'

export default {
  title: 'Button'
}

export const Buttons = () => (
  <Box color="black" style={{ padding: '1rem 2rem' }}>
    <Heading
      size="heading-2"
      color="white"
      style={{ padding: 0, marginTop: 0 }}
    >
      .drac-btn
    </Heading>

    {Object.keys(colors).map(color => {
      return (
        <div key={color}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-around'
            }}
          >
            <Box>
              <Text color="white">.drac-btn .{colors[color]}</Text>
              <Box>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                >
                  Normal <span>🤠</span>
                </Button>

                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  disabled
                >
                  Normal <span>🤠</span>
                </Button>
              </Box>
            </Box>

            <Box>
              <Text color="white">.drac-btn-ghost .{colors[color]}</Text>
              <Box>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="ghost"
                >
                  Ghost <span>👻</span>
                </Button>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="ghost"
                  disabled
                >
                  Ghost <span>👻</span>
                </Button>
              </Box>
            </Box>

            <Box>
              <Text color="white">.drac-btn-outline .{colors[color]}</Text>
              <Box>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="outline"
                >
                  Outline
                </Button>
                <Button
                  themeColor={color as ButtonProps['themeColor']}
                  style={{ margin: '1rem' }}
                  variant="outline"
                  disabled
                >
                  Outline
                </Button>
              </Box>
            </Box>
          </Box>
        </div>
      )
    })}
  </Box>
)
