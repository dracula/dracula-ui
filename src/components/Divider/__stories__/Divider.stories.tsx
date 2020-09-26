import React from 'react'
import { DividerProps, Divider, dividerColors } from '@/index'

export default {
  title: 'Divider'
}

export const DividerColors = () => {
  return (
    <div
      className={'drac-bg-black'}
      style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
    >
      {Object.keys(dividerColors).map((color) => {
        return (
          <div>
            <p className="drac-text drac-text-white">
              .drac-divider .drac-divider-{color}
            </p>
            <Divider key={color} color={color as DividerProps['color']} />
          </div>
        )
      })}
    </div>
  )
}
