import React from 'react'
import { SelectProps, Select, selectVariants, selectColors } from '@/index'

export default {
  title: 'Select'
}

export const SelectBasic = () => {
  return (
    <Select defaultValue="default" color={'white'}>
      <option value="default" disabled>
        Select option
      </option>
      <option>Blade</option>
      <option>Buffy</option>
      <option>Lincoln</option>
      <option>Morbius</option>
      <option>Van Helsing</option>
    </Select>
  )
}

export const SelectVariants = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(selectVariants).map((variant) => {
        return (
          <div key={variant} style={{ marginBottom: 10 }}>
            <Select
              defaultValue="default"
              variant={variant as SelectProps['variant']}
              color={'white'}
            >
              <option value="default" disabled>
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

export const SelectDisabled = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(selectVariants).map((variant) => {
        return (
          <div key={variant} style={{ marginBottom: 10 }}>
            <Select
              disabled
              variant={variant as SelectProps['variant']}
              color={'white'}
            >
              <option value="default">Select option</option>
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

export const SelectColors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(selectColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Select
              defaultValue="default"
              variant={'outline'}
              color={color as SelectProps['color']}
            >
              <option value="default" disabled>
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

      {Object.keys(selectColors).map((color) => {
        return (
          <div key={color} style={{ marginBottom: 10 }}>
            <Select
              defaultValue="default"
              variant={'normal'}
              color={color as SelectProps['color']}
            >
              <option value="default" disabled>
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
