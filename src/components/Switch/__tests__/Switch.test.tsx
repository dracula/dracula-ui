import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Switch, SwitchProps, switchColors } from '@/components/Switch/Switch'

docs(Switch, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Render a toggle component using checkbox under the hood.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Switches can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Disabled',
        Disabled,
        'A disabled switch is unusable and un-clickable.'
      ),
    ]
  }
})

function Usage() {
  return (
    <Box>
      <Switch color="purple" id="demo" name="demo" defaultChecked />
      <label htmlFor="demo" className="drac-text drac-text-white">
        Checked
      </label>
    </Box>
  )
}

function Disabled() {
  return (
    <Box>
      <Box mb="xs">
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
  )
}

function Colors() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(switchColors).map((color) => {
        return (
          <Box key={color} mb="xs">
            <Switch
              id={color}
              defaultChecked
              color={color as SwitchProps['color']}
              name="demo"
            />
            <label htmlFor={color} className="drac-text drac-text-white">
              Switch
            </label>
          </Box>
        )
      })}
    </Box>
  )
}
