import React from 'react'
import { SwitchProps, Switch, switchColors } from '@/index'

export default {
  title: 'Switch'
}

export const SwitchNormal = () => {
  return (
    <Switch
      id="one"
      defaultChecked
      color={'purple' as SwitchProps['color']}
      name="demo"
    />
  )
}

export const SwitchDisabled = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      <div style={{ marginBottom: 10 }}>
        <Switch
          id="one"
          key="one"
          disabled
          defaultChecked
          color={'white' as SwitchProps['color']}
          name="demo"
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Checked
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Switch
          id="two"
          key="two"
          disabled
          color={'white' as SwitchProps['color']}
          name="demo"
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Unchecked
        </label>
      </div>
    </div>
  )
}

export const SwitchColors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(switchColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Switch
              id={color}
              defaultChecked
              color={color as SwitchProps['color']}
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
