import React from 'react'
import { List } from '@/components/List/List'
import { docs } from '@/documentation/site-docs'
import {
  ListNormal,
  ListColors,
  ListVariants
} from '@/components/List/__stories__/List.stories'
import { snapshot } from '../../../documentation/render-component'
import { Box } from '../../Box/Box'

docs(List, {
  basic() {
    return snapshot(
      'Usage',
      () => (
        <List>
          <li className="drac-text drac-text-white">Blade</li>
          <li className="drac-text drac-text-white">Buffy</li>
          <li className="drac-text drac-text-white">Morbius</li>
        </List>
      ),
      'Render an unstyled list by default.'
    )
  },
  variations() {
    return [
      snapshot(
        'Variants',
        () => (
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
        ),
        'Lists can be displayed in dashes as an `<ul>` or in numbers as an `<ol>'
      ),
      snapshot(
        'Colors',
        () => (
          <List variant="ordered" color="cyan">
            <li className="drac-text drac-text-white">Blade</li>
            <li className="drac-text drac-text-white">Buffy</li>
            <li className="drac-text drac-text-white">Morbius</li>
          </List>
        ),
        'Lists can be customized to use any of the Dracula UI theme colors.'
      ),
    ]
  }
})
