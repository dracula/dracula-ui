/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { TabsProps, Tabs, tabsColors } from '@/index'

export default {
  title: 'Tabs'
}

export const TabsNormal = () => {
  return (
    <Tabs color={'purple' as TabsProps['color']}>
      <li className="drac-tab drac-tab-active">
        <a className="drac-tab-link drac-text" href="#">
          Item One
        </a>
      </li>
      <li className="drac-tab">
        <a className="drac-tab-link drac-text" href="#">
          Item Two
        </a>
      </li>
      <li className="drac-tab">
        <a className="drac-tab-link drac-text" href="#">
          Item Three
        </a>
      </li>
    </Tabs>
  )
}

export const TabsColors = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
      {Object.keys(tabsColors).map((color) => {
        return (
          <Tabs key={color} color={color as TabsProps['color']}>
            <li className="drac-tab drac-tab-active">
              <a className="drac-tab-link drac-text" href="#">
                Item One
              </a>
            </li>
            <li className="drac-tab">
              <a className="drac-tab-link drac-text" href="#">
                Item Two
              </a>
            </li>
            <li className="drac-tab">
              <a className="drac-tab-link drac-text" href="#">
                Item Three
              </a>
            </li>
          </Tabs>
        )
      })}
    </div>
  )
}
