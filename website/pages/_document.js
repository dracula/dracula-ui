import Document, { Head, Html, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";
import React from "react";

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
          <meta
            content="https://ui.draculatheme.com/static/og.jpg"
            property="og:image"
          />
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
          `
            }}
          />
        </Head>
        <body className="drac-scrollbar-grey">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
