import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { OrderedList } from '@/components/OrderedList/OrderedList'

docs(OrderedList, {
  basic() {
    return snapshot('Usage', Usage, 'Render an ordered list by default.')
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        'OrderedLists can be customized to use any of the Dracula UI theme colors.'
      ),
      snapshot(
        'Types',
        Types,
        'OrderedLists can have a numbering type similar to an <ol> element.'
      )
    ]
  }
})

function Usage() {
  return (
    <OrderedList>
      <li className="drac-text drac-text-white">Blade</li>
      <li className="drac-text drac-text-white">Buffy</li>
      <li className="drac-text drac-text-white">Morbius</li>
    </OrderedList>
  )
}

function Colors() {
  return (
    <OrderedList color="cyan">
      <li className="drac-text drac-text-white">Blade</li>
      <li className="drac-text drac-text-white">Buffy</li>
      <li className="drac-text drac-text-white">Morbius</li>
    </OrderedList>
  )
}

function Types() {
  return (
    <OrderedList color="cyan" type="A">
      <li className="drac-text drac-text-white">Blade</li>
      <li className="drac-text drac-text-white">Buffy</li>
      <li className="drac-text drac-text-white">Morbius</li>
    </OrderedList>
  )
}
