import React from 'react'

import { Card, Heading, Box } from '../../..'
import { Avatar } from '../../Avatar/Avatar'
import { Text } from '../../Typography/Text'

export default {
  title: 'Card'
}

export const Cards = () => {
  return (
    <div>
      <Card color="cyanGreen">
        <Heading size="heading-3" spacing="medium">
          How to kill Vampires
        </Heading>

        <Box
          style={{ maxWidth: 300, paddingTop: 0, paddingBottom: 0 }}
          spacing="medium"
        >
          <Text>
            Depending on the vampire’s power level, they may be able to resist
            sunlight exposure.
          </Text>
        </Box>

        <Box spacing="medium" style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            title="Wesley Snipes"
            src="https://img1.looper.com/img/gallery/wesley-snipes-has-something-to-say-about-the-latest-blade-news/intro-1563907716.jpg"
          />

          <Box
            spacing="small"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <Text>Author</Text>
            <Text weight="semibold">Wesley Snipes</Text>
          </Box>
        </Box>
      </Card>
    </div>
  )
}
