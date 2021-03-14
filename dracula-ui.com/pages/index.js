import React from "react"
import Head from "next/head"
import Docs from "../layouts/Theme"

import Navigation from "../components/Navigation"

class Index extends React.Component {
  render() {
    const title = "Dracula UI"
    const description = "A dark-first collection of UI patterns and components"

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="Netto Farah &amp; Zeno Rocha" name="author" />
          <meta content="https://dracula-ui.com" property="og:url" />
        </Head>

        <Navigation />
      </div>
    )
  }
}

Index.Layout = Docs

export default Index
