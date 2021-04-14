import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Checkbox, CheckboxProps, checkboxColors } from '@/components/Checkbox/Checkbox'

docs(Checkbox, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Checkbox allows for styling HTML checkboxes with Dracula UI styles.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Checkboxes can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
      ),
      snapshot(
        'Disabled',
        Disabled,
        'A disabled checkbox is unusable and un-clickable.'
      ),
    ]
  }
})

function Usage() {
  return (
    <Box>
      <Checkbox
        id="normal"
        name="normal"
        color="purple"
        defaultChecked
      />
      <label htmlFor="normal" className="drac-text drac-text-white">
        Enjoys the light
      </label>
    </Box>
  )
}

function Disabled() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      <Box mb="xs">
        <Checkbox
          id="one"
          key="one"
          name="one"
          color="white"
          defaultChecked
          disabled
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Vampire
        </label>
      </Box>
      <Box mb="xs">
        <Checkbox
          id="two"
          key="two"
          name="two"
          color="white"
          disabled
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Human
        </label>
      </Box>
    </Box>
  )
}

function Colors() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(checkboxColors).map((color) => {
        return (
          <Box key={color} mb="xs">
            <Checkbox
              id={color}
              color={color as CheckboxProps['color']}
              name={color}
              defaultChecked
            />
            <label htmlFor={color} className="drac-text drac-text-white">
              Checkbox
            </label>
          </Box>
        )
      })}
    </Box>
  )
}