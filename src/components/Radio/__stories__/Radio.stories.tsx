import React from 'react'
import { RadioProps, Radio, radioColors } from '@/components/Radio/Radio'

export default {
  title: 'Radio'
}

export const RadioNormal = () => {
  return (
    <div>
      <Radio
        id="one"
        key="one"
        defaultChecked
        color={'purple' as RadioProps['color']}
        name="demo"
      />

      <label htmlFor="one" className="drac-text drac-text-white">
        Checked
      </label>
    </div>
  )
}

export const RadioDisabled = () => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="one"
          key="one"
          defaultChecked
          color={'white' as RadioProps['color']}
          name="demo"
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Checked
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="two"
          key="two"
          color={'white' as RadioProps['color']}
          name="demo"
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Unchecked
        </label>
      </div>
    </div>
  )
}

export const RadioColors = () => {
  return (
    <div>
      {Object.keys(radioColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Radio
              id={color}
              color={color as RadioProps['color']}
              name="demo"
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
