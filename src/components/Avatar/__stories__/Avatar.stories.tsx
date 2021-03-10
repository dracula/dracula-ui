import { colors } from '../../../base/colors'
import { Avatar, AvatarProps, Box, Heading, Text } from '../../../index'
import React from 'react'

export default {
  title: 'Avatar'
}

const boxStyle = {
  marginBottom: '1rem'
}

export const Avatars = () => (
  <Box color="black" style={{ padding: '1rem 2rem' }}>
    <Heading
      size="heading-2"
      color="white"
      style={{ padding: 0, marginTop: 0 }}
    >
      .drac-avatar
    </Heading>

    {Object.keys(colors).map((color) => {
      return (
        <Box style={boxStyle}>
          <Text color="white">.drac-avatar .{colors[color]}</Text>
          <Box style={{ display: 'flex' }}>
            <Avatar
              title="Netto Farah"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
            />
            <Avatar
              title="Netto Farah"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1217874327137185794/rFqSV_h0_400x400.jpg"
            />
            <Avatar
              title="Netto Farah"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1217874327137185794/rFqSV_h0_400x400.jpg"
              borderVariant="large"
            />
            <Avatar
              title="Netto Farah"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1217874327137185794/rFqSV_h0_400x400.jpg"
              borderVariant="none"
            />
            <Avatar
              title="Netto Farah"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1217874327137185794/rFqSV_h0_400x400.jpg"
              variant="subtle"
            />

            <Avatar
              title="Zeno Rocha"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
            />
            <Avatar
              title="Zeno Rocha"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1145166093029265408/9gJSVrQ7_400x400.jpg"
            />
            <Avatar
              title="Zeno Rocha"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1145166093029265408/9gJSVrQ7_400x400.jpg"
              borderVariant="large"
            />
            <Avatar
              title="Zeno Rocha"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1145166093029265408/9gJSVrQ7_400x400.jpg"
              borderVariant="none"
            />
            <Avatar
              title="Zeno Rocha"
              themeColor={color as AvatarProps['themeColor']}
              style={{ margin: '1rem' }}
              src="https://pbs.twimg.com/profile_images/1145166093029265408/9gJSVrQ7_400x400.jpg"
              variant="subtle"
            />
          </Box>
        </Box>
      )
    })}
  </Box>
)
