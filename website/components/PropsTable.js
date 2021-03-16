import React from "react"
import { Box, Paragraph, Text } from "../../dist"

const spacingProps = [
  'p', 'py', 'px', 'pb', 'pt', 'pl', 'pr',
  'm', 'my', 'mx', 'mb', 'mt', 'ml', 'mr',
]

const PropsTable = ({ props }) => {
  const propList = Object.values(props)
  const ownProps = propList.filter(p => !spacingProps.includes(p.name))

  return (
    <>
      {ownProps.map((prop) => (
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
