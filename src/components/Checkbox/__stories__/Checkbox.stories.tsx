import React from 'react'
import { CheckboxProps, Checkbox, checkboxColors } from '@/index'

export default {
  title: 'Checkbox'
}

export const CheckboxNormal = () => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      <p className="drac-text drac-text-white">.drac-checkbox</p>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          id="one"
          defaultChecked
          color={'purple' as CheckboxProps['color']}
          name="demo"
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Option 1
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          id="two"
          color={'purple' as CheckboxProps['color']}
          name="demo"
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Option 2
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          id="three"
          color={'purple' as CheckboxProps['color']}
          name="demo"
        />
        <label htmlFor="three" className="drac-text drac-text-white">
          Option 3
        </label>
      </div>
    </div>
  )
}

export const CheckboxDisabled = (props?: Partial<CheckboxProps>) => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      <p className="drac-text drac-text-white">.drac-checkbox[disabled]</p>
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

export const CheckboxColors = (props?: Partial<CheckboxProps>) => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      {Object.keys(checkboxColors).map((color) => {
        return (
          <div key={color}>
            <p className="drac-text drac-text-white">
              .drac-checkbox .drac-checkbox-{color}
            </p>
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
