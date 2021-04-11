import Head from "next/head"
import { Box, Heading, Paragraph } from "@dracula/dracula-ui"
import Navigation from "../components/Navigation"
import styles from "../pages/index.module.css"

export default function Docs({ children }) {
  const { title, description } = children.props.query
  const pageTitle = `${title} — Dracula UI`;

  return (
    <Box>
      <Head>
        <title>{pageTitle}</title>
        <meta content={pageTitle} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
      </Head>

      <Box className={styles.container}>
        <Navigation selected={title} />
        <Box className={styles.content} py="lg">
          <main className={styles.center}>
            <Heading as="h1" size="2xl">{title}</Heading>
            <Paragraph className={styles.description} size="md">
              {description}
            </Paragraph>

            {children}
          </main>
        </Box>
      </Box>
    </Box>
  )
}