import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Box } from '@/components/Box/Box'
import { List } from '@/components/List/List'

docs(List, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      'Render an unstyled list by default.'
    )
  },
  variations() {
    return [
      snapshot(
        'Variants',
        Variants,
        'Lists can be displayed in dashes as an `<ul>` or in numbers as an `<ol>'
      ),
      snapshot(
        'Colors',
        Colors,
        'Lists can be customized to use any of the Dracula UI theme colors.'
      ),
    ]
  }
})

function Usage() {
  return (
    <List>
      <li className="drac-text drac-text-white">Blade</li>
      <li className="drac-text drac-text-white">Buffy</li>
      <li className="drac-text drac-text-white">Morbius</li>
    </List>
  )
}

function Variants() {
  return (
    <Box>
      <List variant="ordered" color="purple">
        <li className="drac-text drac-text-white">Blade</li>
        <li className="drac-text drac-text-white">Buffy</li>
        <li className="drac-text drac-text-white">Morbius</li>
      </List>

      <List variant="unordered" color="purple">
        <li className="drac-text drac-text-white">Blade</li>
        <li className="drac-text drac-text-white">Buffy</li>
        <li className="drac-text drac-text-white">Morbius</li>
      </List>
    </Box>
  )
}

function Colors() {
  return (
    <List variant="ordered" color="cyan">
      <li className="drac-text drac-text-white">Blade</li>
      <li className="drac-text drac-text-white">Buffy</li>
      <li className="drac-text drac-text-white">Morbius</li>
    </List>
  )
}