import React from 'react'
import { RadioProps, Radio, radioColors } from '../../..'

export default {
  title: 'Radio'
}

export const RadioNormal = (props?: Partial<RadioProps>) => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      <p className="drac-text drac-text-white">.drac-radio</p>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="one"
          key="one"
          defaultChecked
          color={'purple' as RadioProps['color']}
          name="demo"
        />
        <label htmlFor="one" className="drac-text drac-text-white">
          Option 1
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="two"
          key="two"
          color={'purple' as RadioProps['color']}
          name="demo"
        />
        <label htmlFor="two" className="drac-text drac-text-white">
          Option 2
        </label>
      </div>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="three"
          key="three"
          color={'purple' as RadioProps['color']}
          name="demo"
        />
        <label htmlFor="three" className="drac-text drac-text-white">
          Option 3
        </label>
      </div>
    </div>
  )
}

export const RadioDisabled = (props?: Partial<RadioProps>) => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      <p className="drac-text drac-text-white">.drac-radio[disabled]</p>
      <div style={{ marginBottom: 10 }}>
        <Radio
          id="one"
          key="one"
          disabled
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
          disabled
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

export const RadioColors = (props?: Partial<RadioProps>) => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      {Object.keys(radioColors).map(color => {
        return (
          <div key={color}>
            <p className="drac-text drac-text-white">
              .drac-radio .drac-radio-{color}
            </p>
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
