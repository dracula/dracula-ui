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
      title="Netto Farah"
      src="https://pbs.twimg.com/profile_images/1325812776707690496/_iTWBLbr_400x400.jpg"
    />
  )
}

function Colors() {
  return (
    <Avatar title="Netto Farah" color="cyan" />
  )
}

function Variants() {
  return (
    <div>
      <Avatar title="Zeno Rocha" variant="subtle" />
      <Avatar title="Netto Farah" variant="normal" />
    </div>
  )
}

function BorderVariants() {
  return (
    <div>
      <Avatar title="Netto Farah" borderVariant="large" />
      <Avatar title="Netto Farah" borderVariant="none" />
    </div>
  )
}