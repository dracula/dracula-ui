import {
  Anchor,
  Box,
  Heading,
  Paragraph,
  spacingUtilities,
  Table,
  Text
} from 'dracula-ui'
import classes from 'dracula-ui/dsp/data/css.json'
import { groupBy } from 'lodash'
import React from 'react'
import { DocsOverview } from '../components/DocsOverview'
import Docs from '../layouts/Docs'
import styles from './index.module.css'

const classGroup = groupBy(classes.entities, (entity) => {
  const noDot = entity.name.replace('.', '')
  const [prefix, second, ..._rest] = entity.name.split('-')

  if (spacingUtilities.classes.margin.includes(noDot)) {
    return `${prefix}-m`
  }

  if (spacingUtilities.classes.padding.includes(noDot)) {
    return `${prefix}-p`
  }

  return `${prefix}-${second}`
})

export async function getStaticProps() {
  return {
    props: {
      query: {
        title: 'CSS',
        description: 'Learn how to use specific Dracula UI CSS Classes.'
      }
    }
  }
}

class CSS extends React.Component {
  render() {
    return (
      <Box>
        <DocsOverview
          sections={Object.keys(classGroup).map((group) => ({
            title: group
          }))}
        />

        <Box my="lg">
          <Heading as="h2" size="xl" color="cyanGreen">
            CSS Classes Index
          </Heading>
          <Paragraph>
            Dracula UI ships with abstracted Components and Patterns that can be
            used for some of the most common web experiences out of the box.
          </Paragraph>

          <Paragraph>
            However, we understand that some engineers might want use specific
            CSS classes in order to customize their websites. The following
            table contains an index with all Dracula UI CSS classes.
          </Paragraph>
        </Box>

        <Paragraph className={styles.description}>
          Feel free to mix and match whatever styling strategy makes sense for
          your project.
        </Paragraph>

        {Object.keys(classGroup).map((group) => {
          const [_prefix, component] = group.split('-')

          return (
            <Box key={group} my="md">
              <Heading size="xl" pb="sm" color="white">
                <Anchor
                  id={group.toLowerCase()}
                  href={`#${group.toLowerCase()}`}
                >
                  {component}
                </Anchor>
              </Heading>

              <Table variant="striped">
                <tbody>
                  {classGroup[group].map((clz) => {
                    return (
                      <tr key={clz.name}>
                        <td>
                          <Text color="white">{clz.name}</Text>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Box>
          )
        })}
      </Box>
    )
  }
}

CSS.Layout = Docs

export default CSS
