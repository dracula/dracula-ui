import { Component, createRef } from 'react'
import Router from 'next/router'
import { HotKeys } from 'react-hotkeys'
import styles from './Launcher.module.css'
import dspComponents from 'dracula-ui/dsp/data/components.json'
import { Box, Text } from 'dracula-ui'
import FocusTrap from 'focus-trap-react'
import Fuse from 'fuse.js'
import { iconMap } from './icon-map'

class Launcher extends Component {
  constructor(props) {
    super(props)

    this.options = dspComponents.entities.map((entity) => {
      return {
        title: entity.name,
        icon: iconMap[entity.name],
        handler: () => Router.push(`/${entity.name.toLowerCase()}`)
      }
    })

    this.state = {
      query: '',
      selected: 0,
      filtered: this.options
    }

    this.optionRefs = []
  }

  componentDidMount() {
    this.fuse = new Fuse(this.options, {
      keys: ['title']
    })
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.filtered !== this.state.filtered) {
      this.optionRefs = this.optionRefs.filter((x) => x !== null)
    }
  }

  navigate(option) {
    option.handler()
    this.prepareToHideLauncher()
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

    let filtered = this.fuse.search(query).map((option) => {
      return option.item
    })

    this.setState({ filtered, selected: 0 })
  }

  onClickOutsideModal(event) {
    if (this.containerRef.current.contains(event.target)) {
      return
    }

    this.prepareToHideLauncher()
  }

  onArrowUpPressed() {
    let { selected, filtered } = this.state

    selected = selected > 0 ? selected - 1 : filtered.length - 1
    this.setState({ selected })

    if (this.optionRefs[selected]) {
      this.optionRefs[selected].focus()
    }
  }

  onArrowDownPressed() {
    let { selected, filtered } = this.state

    selected = selected < filtered.length - 1 ? selected + 1 : 0
    this.setState({ selected })

    if (this.optionRefs[selected]) {
      this.optionRefs[selected].focus()
    }
  }

  onEnterPressed() {
    this.navigate(this.state.filtered[this.state.selected])
  }

  prepareToHideLauncher() {
    this.setState({
      query: '',
      selected: 0,
      filtered: this.options
    })

    this.props.hideLauncher()
  }

  renderOptions() {
    return this.state.filtered.map((option, index) => {
      return (
        <li
          key={index}
          ref={(el) => (this.optionRefs[index] = el)}
          aria-selected={this.state.selected === index}
          tabIndex={this.state.selected === index ? '0' : '-1'}
          onClick={this.navigate.bind(this, option)}
          onMouseEnter={this.onMouseEnter.bind(this, index)}
          className={styles.option}
        >
          <div className={styles.optionTitle}>
            <Box className={styles.optionIcon}>
              <i className={`bi-${option.icon}`} style={{ fontSize: 18 }} />
            </Box>
            <Text>{option.title}</Text>
          </div>
          <svg
            className={styles.enterIcon}
            strokeWidth="2px"
            viewBox="0 0 20 20"
          >
            <g
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3v4c0 2-2 4-4 4H2"></path>
              <path d="M8 17l-6-6 6-6"></path>
            </g>
          </svg>
        </li>
      )
    })
  }

  renderLauncher() {
    this.containerRef = createRef()

    if (this.props.launcherVisible) {
      return (
        <FocusTrap>
          <div
            className={styles.background}
            onClick={this.onClickOutsideModal.bind(this)}
          >
            <div
              ref={this.containerRef}
              className={styles.container}
              role="combobox"
              aria-expanded="true"
              aria-haspopup="listbox"
              aria-modal="true"
              tabIndex="-1"
            >
              <Box className={styles.search}>
                <Box className={styles.iconSearch}>
                  <i className="bi-search" style={{ fontSize: 18 }} />
                </Box>
                <input
                  className={styles.input}
                  value={this.state.query}
                  onChange={this.onSearch.bind(this)}
                  placeholder="Search docs"
                  aria-autocomplete="list"
                  spellCheck="false"
                  autoComplete="off"
                  autoCorrect="off"
                  type="text"
                  autoFocus
                />
              </Box>
              <ul role="listbox" className={styles.list}>
                {this.renderOptions()}
              </ul>
            </div>
          </div>
        </FocusTrap>
      )
    }
  }

  render() {
    const keyMap = {
      LAUNCHER_UP: ['up'],
      LAUNCHER_DOWN: ['down'],
      LAUNCHER_ENTER: ['enter']
    }

    const handlers = {
      LAUNCHER_UP: this.onArrowUpPressed.bind(this),
      LAUNCHER_DOWN: this.onArrowDownPressed.bind(this),
      LAUNCHER_ENTER: this.onEnterPressed.bind(this)
    }

    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        {this.renderLauncher()}
      </HotKeys>
    )
  }
}

export default Launcher
