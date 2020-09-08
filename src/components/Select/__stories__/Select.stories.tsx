import React from 'react'
import { SelectProps, Select, selectVariants, selectColors } from '../../..'

export default {
  title: 'Select'
}

export const SelectVariants = (props?: Partial<SelectProps>) => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      {Object.keys(selectVariants).map(variant => {
        return (
          <Select
            key={variant}
            variant={variant as SelectProps['variant']}
            color={'white'}
          >
            <option disabled selected>
              Select option
            </option>
            <option>Blade</option>
            <option>Buffy</option>
            <option>Lincoln</option>
            <option>Morbius</option>
            <option>Van Helsing</option>
          </Select>
        )
      })}
    </div>
  )
}

export const SelectColors = (props?: Partial<SelectProps>) => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      {Object.keys(selectColors).map(color => {
        return (
          <div>
            <p className="drac-text drac-text-white">
              .drac-select-outline .drac-select-{color}
            </p>
            <Select
              key={color}
              variant={'outline'}
              color={color as SelectProps['color']}
            >
              <option disabled selected>
                Select option
              </option>
              <option>Blade</option>
              <option>Buffy</option>
              <option>Lincoln</option>
              <option>Morbius</option>
              <option>Van Helsing</option>
            </Select>
          </div>
        )
      })}

      <p className="drac-text drac-text-white">Default</p>
      {Object.keys(selectColors).map(color => {
        return (
          <div>
            <p className="drac-text drac-text-white">
              .drac-select .drac-select-{color}
            </p>
            <Select
              key={color}
              variant={'normal'}
              color={color as SelectProps['color']}
            >
              <option disabled selected>
                Select option
              </option>
              <option>Blade</option>
              <option>Buffy</option>
              <option>Lincoln</option>
              <option>Morbius</option>
              <option>Van Helsing</option>
            </Select>
          </div>
        )
      })}
    </div>
  )
}
