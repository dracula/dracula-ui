import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Tabs, TabsProps, tabsColors } from '@/components/Tabs/Tabs'

docs(Tabs, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Display different content based on the Tabs behavior.'
    )
  },
  variations: () => snapshot(
    'Colors',
    Colors,
    'Tabs can be customized to use any of the Dracula UI theme colors.'
  )
})

function Usage() {
  return (
    <Tabs>
      {TabsContent()}
    </Tabs>
  )
}

function Colors() {
  return (
    <Box>
      {Object.keys(tabsColors).map((color) => {
        return (
          <Box key={color}>
            <Tabs color={color as TabsProps['color']}>
              {TabsContent()}
            </Tabs>
          </Box>
        )
      })}
    </Box>
  )
}

function TabsContent() {
  return (
    <>
      <li className="drac-tab drac-tab-active">
        <a className="drac-tab-link drac-text" href="#">
          Item One
        </a>
      </li>
      <li className="drac-tab">
        <a className="drac-tab-link drac-text" href="#">
          Item Two
        </a>
      </li>
      <li className="drac-tab">
        <a className="drac-tab-link drac-text" href="#">
          Item Three
        </a>
      </li>
    </>
  )
}