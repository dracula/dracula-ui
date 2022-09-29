import { Component } from "react"
import { Box } from "dracula-ui"
import styles from "./Search.module.css"

class Search extends Component {
  renderShortcut() {
    if (global.navigator.platform.indexOf('Mac') > -1) {
      return <span className={styles.shortcut}>
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </span>
    }
    else if (global.navigator.platform.indexOf('Win') > -1) {
      return <span className={styles.shortcut}>
        <kbd>Ctrl</kbd>
        <kbd>K</kbd>
      </span>
    }

    return <span />
  }

  render() {
    const label = 'Quick search the docs'

    return <Box className={styles.container} pt="sm">
      <button
        onClick={this.props.showLauncher.bind(this)}
        className={styles.button}
        aria-label={label}
        role="search"
        type="button"
      >
        <i className={styles.searchIcon} />
        {label}
        {this.renderShortcut()}
      </button>
    </Box>
  }
}

export default Search
