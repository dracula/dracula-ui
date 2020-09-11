import React from 'react'
import { colors } from '@/base/colors'
import {
  Avatar,
  AvatarBorderVariants,
  AvatarVariants
} from '@/components/Avatar/Avatar'
import {
  buildSnapshot,
  SnapshotBuilder
} from '@/story-helpers/render-component'
import { siteDocs } from '@/story-helpers/site-docs'
import { withColors } from '@/story-helpers/with-colors'
import { withEntries } from '@/story-helpers/with-entries'

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
        <>
          <Avatar title="Netto Farah" color="black" />
          <Avatar title="Netto Farah" color="cyan" />
        </>
      ),
      `
    Avatars accept colors, like in the example below...
    `
    )

    const colorVariations = withColors(colors, color => {
      return buildSnapshot(`color: ${color}`, () => (
        <Avatar title="Netto Farah" color={color} />
      ))
    })

    const borders = withEntries(AvatarBorderVariants, variant => {
      return buildSnapshot(`border: ${variant}`, () => (
        <Avatar title="Netto Farah" borderVariant={variant} />
      ))
    })

    const avatars = withEntries(AvatarVariants, variant => {
      return buildSnapshot(`variant: ${variant}`, () => (
        <Avatar title="Netto Farah" variant={variant} />
      ))
    })

    return [
      ...colorVariations,
      ...borders,
      ...avatars,
      snap
    ] as SnapshotBuilder[]
  }
})
