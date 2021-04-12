import React from 'react'
import {
  Select,
  SelectProps,
  selectVariants,
  selectColors,
  selectSizes
} from '@/components/Select/Select'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '../../../documentation/render-component'

docs(Select, {
  basic() {
    return snapshot(
      'Usage',
      SelectBasic,
      'Select different items from a list.'
    )
  },
  variations() {
    return [
      snapshot(
        'Sizes',
        SelectSizes,
        'Select can be customize to use several different sizes.'
      ),
      snapshot(
        'Variants',
        SelectVariants,
        'There are two different variations you can use: `normal` and `outline`'
      ),
      snapshot(
        'Disabled',
        SelectDisabled,
        'A disabled select is unusable and un-clickable.'
      ),
      snapshot(
        'Colors',
        SelectColors,
        'Select can be customized to use any of the Dracula UI theme colors.'
      ),
    ]
  }
})

function SelectBasic() {
  return (
    <Select defaultValue="default" color="white">
      <option value="default" disabled>
        Select option
      </option>
      <option>Blade</option>
      <option>Buffy</option>
      <option>Lincoln</option>
      <option>Morbius</option>
      <option>Van Helsing</option>
    </Select >
  )
}

function SelectSizes() {
  return (
    <div>
      {Object.keys(selectSizes).map((size) => {
        return (
          <div key={size} style={{ marginBottom: 10 }}>
            <Select
              defaultValue="default"
              size={size as SelectProps['size']}
              color="white"
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

function SelectVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(selectVariants).map((variant) => {
        return (
          <div key={variant} style={{ marginBottom: 10 }}>
            <Select
              defaultValue="default"
              variant={variant as SelectProps['variant']}
              color="white"
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

function SelectDisabled() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Object.keys(selectVariants).map((variant) => {
        return (
          <div key={variant} style={{ marginBottom: 10 }}>
            <Select
              disabled
              variant={variant as SelectProps['variant']}
              color="white"
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

function SelectColors() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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