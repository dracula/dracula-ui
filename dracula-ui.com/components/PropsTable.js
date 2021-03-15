import React from "react"
import { Box, Paragraph, Text } from "../../dist"

const PropsTable = ({ props }) => {
  const propList = Object.values(props)

  return (
    <>
      {propList.map((prop) => (
        <Box my="md">
          <Box>
            <Text color="pink" weight="semibold">{prop.name}</Text>
            <Text size="xsmall" color="pink"> {prop.required ? "(required)" : ""}</Text>
          </Box>

          <Box>
            <Paragraph p="none" size="small">{prop.description}</Paragraph>
          </Box>

          <Box>
            <Text color="green" weight="semibold">values: </Text><br />
            <Text color="green" size="xsmall">
              {prop.type.name}
            </Text>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default PropsTable
