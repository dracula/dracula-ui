import { Avatar, AvatarBorderVariants } from '@/components/Avatar/Avatar'
import { docs } from '@/documentation/site-docs'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'
import { withEntries } from '../../../documentation/with-entries'

docs(Avatar, {
  basic: () =>
    snapshot(
      'basic usage',
      () => (
        <Avatar
          title="Netto Farah"
          src="https://pbs.twimg.com/profile_images/1217874327137185794/rFqSV_h0_400x400.jpg"
        />
      ),
      `
      The most basic instance of an Avatar requires a src image and a title to be used for accessibility or as a fallback in case the image can't be loaded.
    `
    ),
  variations() {
    const snap = snapshot(
      'Custom colors',
      () => (
        <div>
          <Avatar title="Netto Farah" color="cyan" />
        </div>
      ),
      `
      The Avatar component accepts a *color* param that allows for customizing the background and accent color for an Avatar.
    `
    )

    const variants = snapshot(
      'Custom variants',
      () => (
        <div>
          <Avatar title="Zeno Rocha" variant="subtle" />
          <Avatar title="Netto Farah" variant="normal" />
        </div>
      ),
      `
    Avatars accept multiple variants, which can be used to render a more subtle variation of the Avatar component.
    `
    )

    const borders = withEntries(AvatarBorderVariants, (variant) => {
      return snapshot(
        `border: ${variant}`,
        () => <Avatar title="Netto Farah" borderVariant={variant} />,
        `
        A border variant allows for customization of the border width of an Avatar, or for an Avatar to be rendered without a border.
      `
      )
    })

    return [...borders, variants, snap]
  }
})
