import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Tabs } from '@/components/Tabs/Tabs'

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
    <Tabs color="white">
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
    </Tabs>
  )
}

function Colors() {
  return (
    <Box>
      <Box>
        <Tabs color="cyan">
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
        </Tabs>
      </Box>
      <Box>
        <Tabs color="green">
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
        </Tabs>
      </Box>
    </Box>
  )
}