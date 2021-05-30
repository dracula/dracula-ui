import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta content="https://ui.draculatheme.com/static/og.jpg" property="og:image" />
          <meta content="Netto Farah &amp; Zeno Rocha" name="author" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
            __html: `
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="LZ31LCJHOW2uEvCyx3nnkiIo8k3BSk4R";analytics.SNIPPET_VERSION="4.13.2";
              analytics.load("LZ31LCJHOW2uEvCyx3nnkiIo8k3BSk4R");
              analytics.page();
              }}();`
            }}
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
