import React from 'react'
import { Checkbox, CheckboxProps, checkboxColors } from '@/components/Checkbox/Checkbox'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Checkbox, {
  basic() {
    return snapshot(
      'Usage',
      CheckboxNormal,
      'Checkbox allows for styling HTML checkboxes with Dracula UI styles.'
    )
  },
  variations() {
    return [
      snapshot(
        'Disabled',
        CheckboxDisabled,
        'A disabled checkbox is unusable and un-clickable.'
      ),
      snapshot(
        'Colors',
        CheckboxColors,
        'Checkboxes can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
      )
    ]
  }
})

function CheckboxNormal() {
  return (
    <div>
      <Checkbox
        id="normal"
        name="normal"
        color="purple"
        defaultChecked
      />
      <label htmlFor="normal" className="drac-text drac-text-white">
        Checked
      </label>
    </div>
  )
}

function CheckboxDisabled() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          id="one"
          key="one"
          name="one"
          color="white"
          defaultChecked
          disabled
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Checked
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          id="two"
          key="two"
          name="two"
          color="white"
          disabled
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Unchecked
        </label>
      </div>
    </div>
  )
}

function CheckboxColors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(checkboxColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Checkbox
              id={color}
              color={color as CheckboxProps['color']}
              name={color}
              defaultChecked
            />
            <label htmlFor={color} className="drac-text drac-text-white">
              Checkbox
            </label>
          </div>
        )
      })}
    </div>
  )
}