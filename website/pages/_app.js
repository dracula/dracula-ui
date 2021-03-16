import App from "next/app"
import Router from "next/router"
import * as gtag from "../lib/gtag"

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url))

import "normalize.css"
import "../../dist/styles/dracula-ui.css"

const Noop = ({ children }) => children

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const Layout = Component.Layout || Noop

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
