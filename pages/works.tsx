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
      <Layout htmlTitle="Works | Mayfantasy">
        <div className="works-page">
          {/* Hero Banner */}
          <HeroBanner title="Our Work" includeContact src="/works-banner.png" />

          {/* Content */}
          <Works />
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default WorksPage
