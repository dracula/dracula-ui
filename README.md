# Dracula UI (Early Access)

> A dark-first collection of UI patterns and components.

![Dracula UI](https://user-images.githubusercontent.com/398893/111241824-24571f00-85bb-11eb-86fc-15836ac703c6.png)

## :tada: Early Access Program

[Welcome / GitHub Discussion](https://github.com/dracula/dracula-ui/discussions/17)

## :thinking: Why

Most templates are built using light colors and later on adapted to dark colors. Dark themes shouldn't be an afterthought, they should be a top priority.

Our mission is to unleash the creative potential in every developer. We do that by providing modular components that can be used to build modern sites faster.

## :book: Documentation

You can access the documentation portal at: [ui.draculatheme.com](https://ui.draculatheme.com)

> Note: Please don't share this secret URL with people outside of the early access program.

## :computer: Setup

Dracula UI uses [GitHub Packages](https://github.com/features/packages) to distribute the code to you.

First, create a [Personal Access Token](https://github.com/settings/tokens/new) with the following scopes: `write:packages` and `delete:packages`.

Now, create a `.npmrc` file in the root of your project and include the following lines, replacing `TOKEN` with your Personal Access Token.

```
registry=https://registry.npmjs.org/
@dracula:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=TOKEN
```

This will allow you to fetch all packages from npm except for Dracula UI, which will be downloaded from GitHub Packages.

## :package: Install

You can install Dracula UI via npm or yarn.

```bash
npm install @dracula/dracula-ui

yarn add @dracula/dracula-ui
```

If you're not into package managers, just [download a ZIP](https://github.com/dracula/dracula-ui/archive/master.zip) file.

## :zap: Using with HTML

You can use Dracula UI with plain HTML by importing the CSS file.

```html
<link
  rel="stylesheet"
  href="node_modules/@dracula/dracula-ui/styles/dracula-ui.css"
/>
```

Now you can take advantage of all the classes, for example:

```html
<p class="drac-text drac-text-black">Hello Vampire</p>
```

> [See full example](https://github.com/dracula/dracula-ui/tree/master/examples/with-html).

## :sparkles: Using with React

You can also use Dracula UI with React by importing the JS package.

```js
import '@dracula/dracula-ui/styles/dracula-ui.css'
import { Paragraph } from '@dracula/dracula-ui'

function App() {
  return <Paragraph color="black">Hello Vampire</Paragraph>
}

export default App;
```

> [See full example](https://github.com/dracula/dracula-ui/tree/master/examples/with-react).

## :rocket: Using with Next.js

First, you need to import the CSS globally.

Go to `pages/_app.js` (or create this file if it doesn't exist yet) and add the CSS import:

```jsx
import '@dracula/dracula-ui/styles/dracula-ui.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

Then you can import Dracula UI and use all React components.

```jsx
import { Component } from 'react'
import { Paragraph } from '@dracula/dracula-ui'

class Index extends Component {
  render() {
    return <Paragraph color="black">Hello Vampire</Paragraph>
  }
}

export default Index
```

> [See full example](https://github.com/dracula/dracula-ui/tree/master/examples/with-next).

## :test_tube: Using with Jekyll

Go to `_config.yml` and include the `node_modules` folder:

```yaml
include:
  - node_modules
```

Create a Sass file at `assets/css/styles.scss` with the following content:

```scss
---
---
@import "../../node_modules/@dracula/dracula-ui/styles/dracula-ui.css"
```

The empty front matter at the top tells Jekyll it needs to process the Dracula UI file.

Finally, include the compiled CSS file into your `_layouts`.

```html
<link rel="stylesheet" href="/assets/css/styles.css">
```

> [See full example](https://github.com/dracula/dracula-ui/tree/master/examples/with-jekyll).

## :bulb: Ideas

You can suggest new ideas using [GitHub Discussions](https://github.com/dracula/dracula-ui/discussions).

## :wave: Questions

If you find a problem, feel free to open new [GitHub Issues](https://github.com/dracula/dracula-ui/issues).
