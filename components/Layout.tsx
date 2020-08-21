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
  pageAbsoluteUrl: string
}

const Layout = (props: IProps) => {
  const { children, htmlTitle, htmlDescription, pageAbsoluteUrl } = props
  const title = htmlTitle || 'Mayfantasy'
  const description =
    htmlDescription ||
    'Mayfantasy is a Toronto based digital agency specialized in producing top industrial level websites, e-commerce and web applications (SaaS).'
  return (
    <>
      <style jsx>{`
        .layout {
        }
      `}</style>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content={description}></meta>
        <link rel="canonical" href={pageAbsoluteUrl} />
      </Head>

      <div className="layout container mx-auto px-4">
        <Header />

        <div>{children}</div>
        {/* {_.range(100).map((t) => (
          <h1 key={t}>Placeholder</h1>
        ))} */}
        {/* <ul>
          <li>Works section position issue with header</li>
          <li>Content Redo</li>
        </ul>
        <br />
        <ul>
          <li>Promote your website on Google My Business</li>
          <li>Pages should not have low word counts</li>
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
