import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import Works from 'components/Works'

const WorksPage = () => {
  return (
    <>
      <style jsx>{`
        .works-page {
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/works/"
        htmlTitle="Our Work | Mayfantasy"
        htmlDescription="Check out our works of website, e-commerce and SaaS projects which we've been working on. Mayfantasy's top priority is client success."
      >
        <div className="works-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Our Work"
            tagline="Form more details about our previous work or quote for a new project, please contact us"
            includeContact
            src="/banner/works-banner.svg"
            alt="Works Banner"
          />

          {/* Content */}
          <div className="container px-4 mx-auto">
            <Works />
          </div>
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default WorksPage
