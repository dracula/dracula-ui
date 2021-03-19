import { Box } from '@/components/Box/Box'
import { Text } from '@/components/Text/Text'
import { docs } from '@/documentation/site-docs'
import React from 'react'
import { snapshot } from '../../documentation/render-component'

docs('Spacing', {
  basic() {
    return snapshot(
      'Usage',
      () => (
        <Box p="md" color="pink">
          <Box>
            <Text>Padding</Text>
          </Box>
        </Box>
      ),
      ''
    )
  },

  variations() {
    return [
      snapshot(
        'Padding',
        () => (
          <Box>
            <Box p="sm" color="pink">
              <Box>
                <Text>padding sm</Text>
              </Box>
            </Box>

            <Box py="sm" color="purple">
              <Box>
                <Text>padding y sm</Text>
              </Box>
            </Box>

            <Box px="sm" color="red">
              <Box>
                <Text>padding x sm</Text>
              </Box>
            </Box>

            <Box pt="sm" pb="md" pl="lg" pr="xxs" color="purpleCyan">
              <Box>
                <Text>mixing all styles</Text>
              </Box>
            </Box>
          </Box>
        ),
        ''
      ),

      snapshot(
        'Margin',
        () => (
          <Box>
            <Box m="sm" color="pink">
              <Box>
                <Text>margin sm</Text>
              </Box>
            </Box>

            <Box my="sm" color="purple">
              <Box>
                <Text>margin y sm</Text>
              </Box>
            </Box>

            <Box mx="sm" color="red">
              <Box>
                <Text>margin x sm</Text>
              </Box>
            </Box>

            <Box mt="sm" mb="md" ml="lg" mr="xxs" color="purpleCyan">
              <Box>
                <Text>mixing all styles</Text>
              </Box>
            </Box>
          </Box>
        ),
        ''
      )
    ]
  }
})
