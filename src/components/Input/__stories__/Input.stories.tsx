import React from 'react'
import { InputProps, Input, inputVariants, inputColors } from '@/index'

export default {
  title: 'Inputs'
}

export const InputVariants = () => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
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

export const InputColors = () => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      {Object.keys(inputColors).map((color) => {
        return (
          <div>
            <p className="drac-text drac-text-white">
              .drac-input-outline .drac-input-{color}
            </p>
            <Input
              key={color}
              placeholder="Placeholder"
              variant={'outline'}
              color={color as InputProps['color']}
              style={{ marginBottom: 20 }}
            />
          </div>
        )
      })}

      <p className="drac-text drac-text-white">Default</p>
      {Object.keys(inputColors).map((color) => {
        return (
          <div>
            <p className="drac-text drac-text-white">
              .drac-input .drac-input-{color}
            </p>
            <Input
              key={color}
              placeholder="Placeholder"
              variant={'normal'}
              color={color as InputProps['color']}
              style={{ marginBottom: 20 }}
            />
          </div>
        )
      })}
    </div>
  )
}
