import { Component } from 'react'
import Router from 'next/router'
import { HotKeys } from 'react-hotkeys'
import styles from "./Launcher.module.css"
import dspComponents from '@dracula/dracula-ui/dsp/data/components.json'
import { Box, Text } from '@dracula/dracula-ui'
import FocusTrap from 'focus-trap-react'
import Fuse from 'fuse.js'

class Launcher extends Component {
  constructor(props) {
    super(props)

    this.options = dspComponents.entities.map(entity => {
      return {
        title: entity.name,
        icon: entity.ext_com_draculaui_icon,
        handler: () => Router.push(`/${entity.name.toLowerCase()}`)
      }
    })

    this.state = {
      query: '',
      selected: 0,
      filtered: this.options,
    }
  }

  async componentDidMount() {
    this.fuse = new Fuse(this.options, {
      keys: ['title']
    })
  }

  onClick(option) {
    option.handler()
    this.props.hideLauncher()
  }

  onKeyPress(option, event) {
    if (event.key === 'Enter') {
      this.onClick(option)
    }
  }

  onMouseEnter(index, event) {
    this.setState({ selected: index })
    event.target.focus()
  }

  onSearch(e) {
    const query = e.target.value.trim()

    this.setState({ query })

    if (query.length === 0) {
      this.setState({ filtered: this.options })
      return
    }

    let filtered = this.fuse.search(query).map(option => {
      return option.item
    })

    this.setState({ filtered, selected: 0 })
  }

  onMoveUp() {
    let { selected } = this.state

    selected = selected > 0 ? selected - 1 : this.options.length - 1
    this.setState({ selected })
  }

  onMoveDown() {
    let { selected } = this.state

    selected = selected < this.options.length - 1 ? selected + 1 : 0
    this.setState({ selected })
  }

  renderOptions() {
    return this.state.filtered.map((option, index) => {
      return <li
        key={index}
        tabIndex={index}
        onClick={this.onClick.bind(this, option)}
        onKeyPress={this.onKeyPress.bind(this, option)}
        onMouseEnter={this.onMouseEnter.bind(this, index)}
        className={this.state.selected === index ? styles.optionSelected : styles.option}>
        <div className={styles.optionTitle}>
          <Box className={styles.optionIcon}>
            <i className={`bi-${option.icon}`} style={{ fontSize: 18 }} />
          </Box>
          <Text>{option.title}</Text>
        </div>
        <svg className={styles.enterIcon} strokeWidth="2px" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg>
      </li>
    })
  }

  renderLauncher() {
    if (this.props.launcherVisible) {
      return <FocusTrap focusTrapOptions={{
        onDeactivate: this.props.hideLauncher
      }}>
        <div className={styles.background}>
          <Box ref={this.containerRef} className={styles.container}>
            <Box className={styles.search}>
              <Box className={styles.iconSearch}>
                <i className="bi-search" style={{ fontSize: 18 }} />
              </Box>
              <input
                className={styles.input}
                value={this.state.query}
                onChange={this.onSearch.bind(this)}
                placeholder="Search docs"
                autoComplete="off"
                type="text"
                autoFocus
              />
            </Box>
            <ul className={styles.list}>
              {this.renderOptions()}
            </ul>
          </Box>
        </div>
      </FocusTrap>
    }
  }

  render() {
    const keyMap = {
      LAUNCHER_UP: ['up'],
      LAUNCHER_DOWN: ['down'],
    }

    const handlers = {
      LAUNCHER_UP: this.onMoveUp.bind(this),
      LAUNCHER_DOWN: this.onMoveDown.bind(this),
    }

    return <HotKeys keyMap={keyMap} handlers={handlers}>
      {this.renderLauncher()}
    </HotKeys>
  }
}

export default Launcher