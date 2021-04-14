import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { Radio, RadioProps, radioColors } from '@/components/Radio/Radio'

docs(Radio, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Radio buttons let a user select only one of a limited number of choices.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'Radio can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Disabled',
        Disabled,
        'A radio select is unusable and un-clickable.'
      ),
    ]
  }
})

function Usage() {
  return (
    <Box>
      <Radio
        id="normal"
        key="normal"
        name="normal"
        color="purple"
        defaultChecked
      />

      <label htmlFor="normal" className="drac-text drac-text-white">
        Likes Garlic
      </label>
    </Box>
  )
}

function Disabled() {
  return (
    <Box>
      <Box mb="xs">
        <Radio
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
        <Radio
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
    <Box>
      {Object.keys(radioColors).map((color) => {
        return (
          <Box key={color} mb="xs">
            <Radio
              id={color}
              color={color as RadioProps['color']}
              name={color}
            />
            <label htmlFor={color} className="drac-text drac-text-white">
              Radio
            </label>
          </Box>
        )
      })}
    </Box>
  )
}