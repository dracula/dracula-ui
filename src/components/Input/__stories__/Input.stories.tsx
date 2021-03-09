import React from 'react'
import {
  InputProps,
  Input,
  inputVariants,
  inputColors,
  inputSizes
} from '@/index'

export default {
  title: 'Input'
}

export const InputBasic = () => {
  return <Input placeholder="Placeholder" color="white" />
}

export const InputVariants = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(inputVariants).map((variant) => {
        return (
          <Input
            key={variant}
            placeholder="Placeholder"
            variant={variant as InputProps['variant']}
            color={'white'}
            style={{ marginBottom: 20 }}
          />
        )
      })}
    </div>
  )
}

export const InputSizes = () => {
  return (
    <div>
      {Object.keys(inputSizes).map((size) => {
        return (
          <div key={size} style={{ marginBottom: 10 }}>
            <Input
              placeholder="Placeholder"
              size={size as InputProps['size']}
              color={'white'}
            />
          </div>
        )
      })}
    </div>
  )
}

export const InputColors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(inputColors).map((color) => {
        return (
          <Input
            key={color}
            placeholder="Placeholder"
            variant={'outline'}
            color={color as InputProps['color']}
            style={{ marginBottom: 20 }}
          />
        )
      })}

      {Object.keys(inputColors).map((color) => {
        return (
          <Input
            key={color}
            placeholder="Placeholder"
            variant={'normal'}
            color={color as InputProps['color']}
            style={{ marginBottom: 20 }}
          />
        )
      })}
    </div>
  )
}
