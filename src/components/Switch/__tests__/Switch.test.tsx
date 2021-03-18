import React from 'react'
import { Switch } from '@/components/Switch/Switch'
import {
  SwitchColors,
  SwitchDisabled,
  SwitchNormal
} from '@/components/Switch/__stories__/Switch.stories'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'

docs(Switch, {
  basic() {
    return snapshot(
      'Usage',
      () => (
        <Box>
          <Switch color="purple" id="demo" name="demo" defaultChecked />
          <label htmlFor="demo" className="drac-text drac-text-white">
            Checked
          </label>
        </Box>
      ),
      'Render a toggle component using checkbox under the hood.'
    )
  },
  variations() {
    return [
      snapshot(
        'Disabled',
        () => (
          <Box>
            <Box>
              <Switch
                id="one"
                disabled
                defaultChecked
                color="white"
                name="one"
              />
              <label htmlFor="one" className="drac-text drac-text-white">
                Checked
              </label>
            </Box>
            <Box>
              <Switch
                id="two"
                disabled
                color="white"
                name="two"
              />
              <label htmlFor="two" className="drac-text drac-text-white">
                Unchecked
              </label>
            </Box>
          </Box>
        ),
        'A disabled switch is unusable and un-clickable.'
      ),
      snapshot(
        'Colors',
        () => (
          <Box>
            <Switch color="cyan" id="colors" name="colors" />
            <label htmlFor="colors" className="drac-text drac-text-cyan">
              Checked
            </label>
          </Box>
        ),
        'Switches can be customized to use any of the Dracula UI theme colors.'
      )
    ]
  }
})
