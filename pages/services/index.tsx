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
      <Layout htmlTitle="Website, E-Commerce, SaaS, and Customized Servcies  | Mayfantasy">
        <div className="services-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Services We Offer"
            includeContact
            src="/banner/services-banner.png"
            alt="All Services Banner"
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
