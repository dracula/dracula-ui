import React from "react"
import { Box, Paragraph, Text } from "@dracula/dracula-ui"

const spacingProps = [
  "p",
  "py",
  "px",
  "pb",
  "pt",
  "pl",
  "pr",
  "m",
  "my",
  "mx",
  "mb",
  "mt",
  "ml",
  "mr"
]

const PropsTable = ({ props }) => {
  const propList = Object.values(props)
  const ownProps = propList.filter((p) => !spacingProps.includes(p.name))

  return (
    <>
      {ownProps.map((prop) => (
        <Box my="md">
          <Box>
            <Text color="purple" weight="semibold">
              {prop.name}
            </Text>
            <Text size="small" color="purple">
              {" "}
              {prop.required ? "(required)" : ""}
            </Text>
          </Box>

          <Box>
            <Paragraph p="none" size="small">
              {prop.description}
            </Paragraph>
          </Box>

          <Box>
            <Text color="green" size="small">
              {prop.type.name
                .replace("| undefined", "")
                .replace("undefined", "")}
            </Text>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default PropsTable
