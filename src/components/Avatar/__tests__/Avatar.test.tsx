import React from 'react'
import { docs } from '@/documentation/site-docs'
import { snapshot } from '@/documentation/render-component'
import { Avatar } from '@/components/Avatar/Avatar'

docs(Avatar, {
  basic() {
    return snapshot(
      'Usage',
      Usage,
      `The most basic instance of an Avatar requires a src image and a title to be used for accessibility or as a fallback in case the image can't be loaded.`
    )
  },
  variations() {
    return [
      snapshot(
        'Colors',
        Colors,
        `The Avatar component accepts a *color* param that allows for customizing the background and accent color for an Avatar.`
      ),
      snapshot(
        'Variants',
        Variants,
        `Avatars accept multiple variants, which can be used to render a more subtle variation of the Avatar component.`
      ),
      snapshot(
        `Borders`,
        BorderVariants,
        `A border variant allows for customization of the border width of an Avatar, or for an Avatar to be rendered without a border.`
      )
    ]
  }
})

function Usage() {
  return (
    <Avatar
      title="Count Dracula"
      src="https://ui.draculatheme.com/static/images/avatar.png"
    />
  )
}

function Colors() {
  return (
    <Avatar
      src="https://ui.draculatheme.com/static/images/avatar.png"
      title="Count Dracula"
      color="cyan"
    />
  )
}

function Variants() {
  return (
    <div>
      <Avatar
        src="https://ui.draculatheme.com/static/images/avatar.png"
        title="Count Dracula"
        variant="normal"
        mb="sm"
      />
      <Avatar
        src="https://ui.draculatheme.com/static/images/avatar.png"
        title="Count Dracula"
        variant="subtle"
      />
    </div>
  )
}

function BorderVariants() {
  return (
    <div>
      <Avatar
        src="https://ui.draculatheme.com/static/images/avatar.png"
        title="Count Dracula"
        borderVariant="large"
        mb="sm"
      />
      <Avatar
        src="https://ui.draculatheme.com/static/images/avatar.png"
        title="Count Dracula"
        borderVariant="none"
      />
    </div>
  )
}