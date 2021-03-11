import React from 'react'
import { ListProps, List, listColors, listVariants } from '@/index'

export default {
  title: 'List'
}

export const ListNormal = () => {
  return <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
    <List color={'purple' as ListProps['color']}>
      <li className="drac-text drac-text-white">Blade</li>
      <li className="drac-text drac-text-white">Buffy</li>
      <li className="drac-text drac-text-white">Morbius</li>
    </List>
  </div >
}

export const ListVariants = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(listVariants).map((variant) => {
        return (
          <div key={variant}>
            <List variant={variant as ListProps['variant']} color={'purple' as ListProps['color']}>
              <li className="drac-text drac-text-white">This is the first item</li>
              <li className="drac-text drac-text-white">This is the second item</li>
              <li className="drac-text drac-text-white">This is the third item</li>
              <li className="drac-text drac-text-white">This is the fourth item</li>
              <li className="drac-text drac-text-white">This is the fifth item</li>
              <li className="drac-text drac-text-white">This is the sixth item</li>
              <li className="drac-text drac-text-white">This is the seventh item</li>
              <li className="drac-text drac-text-white">This is the eighth item</li>
              <li className="drac-text drac-text-white">This is the ninth item</li>
              <li className="drac-text drac-text-white">This is the tenth item (showing how numbers align and wrapping looks by default)</li>
            </List>
          </div>
        )
      })}
    </div>
  )
}

export const ListColors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(listColors).map((color) => {
        return (
          <div key={color}>
            <List variant={'ordered' as ListProps['variant']} color={color as ListProps['color']}>
              <li className="drac-text drac-text-white">Blade</li>
              <li className="drac-text drac-text-white">Buffy</li>
              <li className="drac-text drac-text-white">Morbius</li>
            </List>
          </div>
        )
      })}
    </div>
  )
}
