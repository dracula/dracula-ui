import { Avatar, AvatarBorderVariants } from '@/components/Avatar/Avatar'
import { docs } from '@/documentation/site-docs'
import React from 'react'
import { snapshot } from '../../../documentation/render-component'
import { withEntries } from '../../../documentation/with-entries'

docs(Avatar, {
  basic: () =>
    snapshot('basic usage', () => (
      <Avatar
        title="Netto Farah"
        src="https://pbs.twimg.com/profile_images/1217874327137185794/rFqSV_h0_400x400.jpg"
      />
    )),
  variations() {
    const snap = snapshot(
      'Custom colors',
      () => (
        <div>
          <Avatar title="Netto Farah" color="black" />
          <Avatar title="Netto Farah" color="cyan" />
        </div>
      ),
      `
    Avatars accept colors, like in the example below...
    `
    )

    const variants = snapshot(
      'Custom variants',
      () => (
        <div>
          <Avatar title="Netto Farah" variant="normal" />
          <Avatar title="Zeno Rocha" variant="subtle" />
        </div>
      ),
      `
    Avatars accept multiple variants, like in the example below...
    `
    )

    const borders = withEntries(AvatarBorderVariants, (variant) => {
      return snapshot(`border: ${variant}`, () => (
        <Avatar title="Netto Farah" borderVariant={variant} />
      ))
    })

    return [...borders, variants, snap]
  }
})
