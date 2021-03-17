import { Checkbox } from '@/components/Checkbox/Checkbox'
import { CheckboxColors } from '@/components/Checkbox/__stories__/Checkbox.stories'
import { docs } from '@/documentation/site-docs'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'

docs(Checkbox, {
  basic() {
    return snapshot(
      'Usage',
      () => (
        <div>
          <Checkbox id="one" defaultChecked color="purple" name="demo" />
          <label htmlFor="one" className="drac-text drac-text-white">
            Checked
          </label>
        </div>
      ),
      'Checkbox allows for styling HTML checkboxes with Dracula UI styles.'
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        CheckboxColors,
        'Checkboxes can be customized to use any of the Dracula UI theme colors, including all solid, gradient, and animated colors.'
      )
    ]
  }
})
