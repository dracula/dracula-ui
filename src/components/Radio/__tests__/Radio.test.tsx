import React from 'react'
import { Radio, RadioProps, radioColors } from '@/components/Radio/Radio'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Radio, {
  basic() {
    return snapshot(
      'Usage',
      RadioNormal,
      'Radio buttons let a user select only one of a limited number of choices.'
    )
  },
  variations() {
    return [
      snapshot(
        'Disabled',
        RadioDisabled,
        'A radio select is unusable and un-clickable.'
      ),
      snapshot(
        'Colors',
        RadioColors,
        'Radio can be customized to use any of the Dracula UI theme colors.'
      )
    ]
  }
})

function RadioNormal() {
  return (
    <div>
      <Radio
        id="normal"
        key="normal"
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

function RadioDisabled() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="one"
          key="one"
          name="one"
          color="white"
          defaultChecked
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Checked
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="two"
          key="two"
          name="two"
          color="white"
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Unchecked
        </label>
      </div>
    </div>
  )
}

function RadioColors() {
  return (
    <div>
      {Object.keys(radioColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Radio
              id={color}
              color={color as RadioProps['color']}
              name={color}
            />
            <label htmlFor={color} className="drac-text drac-text-white">
              Radio
            </label>
          </div>
        )
      })}
    </div>
  )
}