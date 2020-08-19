import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import Services from 'components/Services'

const ServicesPage = () => {
  return (
    <>
      <style jsx>{`
        .services-page {
        }
      `}</style>
      <Layout htmlTitle="Services | Mayfantasy">
        <div className="services-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Services We Offer"
            includeContact
            src="/services-banner.png"
          />

          {/* Content */}
          <Services />
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default ServicesPage
