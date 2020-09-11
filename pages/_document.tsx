import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-175964146-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || []; function gtag()
                {dataLayer.push(arguments)}
                gtag('js', new Date()); gtag('config', 'UA-175964146-1');
              `
            }}
          />
          <meta
            name="keywords"
            content="web, website development, website design, e-commerce development, online store design, digital solutions, web store development, toronto, html, css, javascript, react, react development"
          />
          <meta name="author" content="Mayfantasy" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          ></link> */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
