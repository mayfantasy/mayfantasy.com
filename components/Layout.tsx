// import { Head } from 'next/document'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import _ from 'lodash'
import CopyrightLine from './CopyrightLine'

interface IProps {
  children: React.ReactNode
  htmlTitle?: string
  htmlDescription?: string
}

const Layout = (props: IProps) => {
  const { children, htmlTitle, htmlDescription } = props
  return (
    <>
      <style jsx>{`
        .layout {
        }
      `}</style>
      <Head>
        <title>{htmlTitle || 'Mayfantasy'}</title>
        <meta
          name="description"
          content={
            htmlDescription ||
            'Mayfantasy is Toronto based a digital solution studio specializing in website development, e-commerce, and web applications.'
          }
        />
      </Head>

      <div className="layout container mx-auto px-4">
        <Header />

        <div>{children}</div>
        {/* {_.range(100).map((t) => (
          <h1 key={t}>Placeholder</h1>
        ))} */}
        {/* <ul>
          <li>Create unique, accurate page titles and page descriptions</li>
          <li>Use heading tags to emphasize important text (Symentic HTML)</li>
          <li>Using ‘breadcrumb lists'</li>
          <li>Image tag use loading="lazy"</li>
          <li>Use brief but descriptive filenames and alt text</li>
          <li>Make your site mobile-friendly</li>
          <li>Promote your website on Google My Business</li>
          <li>Use Google analytics</li>
        </ul> */}
        <div>
          <Footer />
        </div>
        <div>
          <CopyrightLine />
        </div>
      </div>
    </>
  )
}

export default Layout
