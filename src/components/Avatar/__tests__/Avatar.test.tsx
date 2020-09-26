import { Avatar, AvatarBorderVariants } from '@/components/Avatar/Avatar'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/story-helpers/site-docs'
import { withEntries } from '@/story-helpers/with-entries'
import React from 'react'

siteDocs(Avatar, {
  basicUsage() {
    return buildSnapshot('basic usage', () => (
      <Avatar
        title="Netto Farah"
        src="https://pbs.twimg.com/profile_images/1217874327137185794/rFqSV_h0_400x400.jpg"
      />
    ))
  },
  variations() {
    const snap = buildSnapshot(
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

    const variants = buildSnapshot(
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
      return buildSnapshot(`border: ${variant}`, () => (
        <Avatar title="Netto Farah" borderVariant={variant} />
      ))
    })

    return [...borders, variants, snap] as SnapshotBuilder[]
  }
})
