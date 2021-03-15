import React from 'react'
import { CheckboxProps, Checkbox, checkboxColors } from '@/index'

export default {
  title: 'Checkbox'
}

export const CheckboxNormal = () => {
  return (
    <div>
      <Checkbox
        id="one"
        defaultChecked
        color={'purple' as CheckboxProps['color']}
        name="demo"
      />
      <label htmlFor="one" className="drac-text drac-text-white">
        Checked
      </label>
    </div>
  )
}

export const CheckboxDisabled = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          id="one"
          key="one"
          disabled
          defaultChecked
          color={'white' as CheckboxProps['color']}
          name="demo"
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Checked
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          id="two"
          key="two"
          disabled
          color={'white' as CheckboxProps['color']}
          name="demo"
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Unchecked
        </label>
      </div>
    </div>
  )
}

export const CheckboxColors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(checkboxColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Checkbox
              id={color}
              defaultChecked
              color={color as CheckboxProps['color']}
              name="demo"
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
