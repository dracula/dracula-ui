import { Component } from 'react'
import Head from 'next/head'
import { Box, Heading, Paragraph } from 'dracula-ui'
import Navigation from '../components/Navigation'
import styles from '../pages/index.module.css'

import { GlobalHotKeys, configure } from 'react-hotkeys'
import Launcher from '../components/Launcher/Launcher'

import dynamic from 'next/dynamic'
const Search = dynamic(() => import('../components/Search'), { ssr: false })

configure({
  ignoreTags: []
})

class Docs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      launcherVisible: false
    }
  }

  showLauncher(event) {
    event.preventDefault()
    this.setState({ launcherVisible: true }, () => {
      document.body.style.overflow = 'hidden'
    })
  }

  hideLauncher() {
    this.setState({ launcherVisible: false }, () => {
      document.body.style.overflow = 'unset'
    })
  }

  render() {
    const { title, description } = this.props.children.props.query
    const pageTitle = `${title} — Dracula UI`

    const keyMap = {
      SHOW_LAUNCHER: ['ctrl+k', 'command+k'],
      HIDE_LAUNCHER: 'esc'
    }

    const handlers = {
      SHOW_LAUNCHER: this.showLauncher.bind(this),
      HIDE_LAUNCHER: this.hideLauncher.bind(this)
    }

    return (
      <Box>
        <Head>
          <title>{pageTitle}</title>
          <meta content={pageTitle} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
        </Head>

        <GlobalHotKeys root keyMap={keyMap} handlers={handlers} />

        <Launcher
          launcherVisible={this.state.launcherVisible}
          hideLauncher={this.hideLauncher.bind(this)}
        />

        <Box className={styles.container}>
          <Navigation selected={title} />
          <Box className={styles.content}>
            <main className={styles.center}>
              <Search showLauncher={this.showLauncher.bind(this)} />
              <Heading as="h1" size="2xl">
                {title}
              </Heading>
              <Paragraph className={styles.description} size="md">
                {description}
              </Paragraph>

              {this.props.children}
            </main>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Docs
