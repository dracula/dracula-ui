import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Box, Text } from '../.'

const App = () => {
  return (
    <div>
      <Box>
        <Text>hi</Text>
      </Box>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
