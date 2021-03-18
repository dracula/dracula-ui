import React from 'react'
import { Tabs } from '@/components/Tabs/Tabs'
import {
  TabsColors,
  TabsNormal
} from '@/components/Tabs/__stories__/Tabs.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'

docs(Tabs, {
  basic: () => snapshot(
    'Usage',
    () => (
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
    ),
    'Display different content based on the Tabs behavior.'
  ),
  variations: () => snapshot(
    'Colors',
    () => (
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
    ),
    'Tabs can be customized to use any of the Dracula UI theme colors.'
  )
})
