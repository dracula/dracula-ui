import React from 'react'
import { Switch, SwitchProps, switchColors } from '@/components/Switch/Switch'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'

docs(Switch, {
  basic() {
    return snapshot(
      'Usage',
      SwitchBasic,
      'Render a toggle component using checkbox under the hood.'
    )
  },
  variations() {
    return [
      snapshot(
        'Disabled',
        SwitchDisabled,
        'A disabled switch is unusable and un-clickable.'
      ),
      snapshot(
        'Colors',
        SwitchColors,
        'Switches can be customized to use any of the Dracula UI theme colors.'
      )
    ]
  }
})

function SwitchBasic() {
  return (
    <Box>
      <Switch color="purple" id="demo" name="demo" defaultChecked />
      <label htmlFor="demo" className="drac-text drac-text-white">
        Checked
      </label>
    </Box>
  )
}

function SwitchDisabled() {
  return (
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
  )
}

function SwitchColors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(switchColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Switch
              id={color}
              defaultChecked
              color={color}
              name="demo"
            />
            <label htmlFor={color} className="drac-text drac-text-white">
              Switch
            </label>
          </div>
        )
      })}
    </div>
  )
}
