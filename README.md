# Dracula UI

> A dark-first collection of UI patterns and components.

![Dracula UI](https://ui.draculatheme.com/static/og.jpg)

## :thinking: Why

Most templates are built using light colors and later on adapted to dark colors. Dark themes shouldn't be an afterthought, they should be a top priority.

Our mission is to unleash the creative potential in every developer. We do that by providing modular components that can be used to build modern sites faster.

## :book: Documentation

You can access the documentation at: [ui.draculatheme.com](https://ui.draculatheme.com)

## :package: Install

You can install Dracula UI via npm or yarn.

```bash
npm install dracula-ui

yarn add dracula-ui
```

## :zap: Using with HTML

You can use Dracula UI with plain HTML by importing the CSS file.

```html
<link
  rel="stylesheet"
  href="node_modules/dracula-ui/styles/dracula-ui.css"
/>
```

Now you can take advantage of all the classes, for example:

```html
<p class="drac-text drac-text-black">Hello Vampire</p>
```

> [See full example](https://github.com/dracula/dracula-ui/tree/main/examples/with-html).

## :sparkles: Using with React

You can also use Dracula UI with React by importing the JS package.

```js
import 'dracula-ui/styles/dracula-ui.css'
import { Paragraph } from 'dracula-ui'

function App() {
  return <Paragraph color="black">Hello Vampire</Paragraph>
}

export default App;
```

> [See full example](https://github.com/dracula/dracula-ui/tree/main/examples/with-react).

## :rocket: Using with Next.js

First, you need to import the CSS globally.

Go to `pages/_app.js` (or create this file if it doesn't exist yet) and add the CSS import:

```jsx
import 'dracula-ui/styles/dracula-ui.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

Then you can import Dracula UI and use all React components.

```jsx
import { Paragraph } from 'dracula-ui'

export default function Index() {
  return <Paragraph color="black">Hello Vampire</Paragraph>
}
```

> [See full example](https://github.com/dracula/dracula-ui/tree/main/examples/with-next).

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
@import "../../node_modules/dracula-ui/styles/dracula-ui.css"
```

The empty front matter at the top tells Jekyll it needs to process the Dracula UI file.

Finally, include the compiled CSS file into your `_layouts`.

```html
<link rel="stylesheet" href="/assets/css/styles.css">
```

> [See full example](https://github.com/dracula/dracula-ui/tree/main/examples/with-jekyll).

## :bulb: Ideas

You can suggest new ideas using [GitHub Discussions](https://github.com/dracula/dracula-ui/discussions).

## :wave: Questions

If you find a problem, feel free to open new [GitHub Issues](https://github.com/dracula/dracula-ui/issues).

### :pencil2: License

[MIT License](https://zenorocha.mit-license.org/) © Zeno Rocha