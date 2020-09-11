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
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/services/"
        htmlTitle="Website, E-Commerce, SaaS, and Customized Servcies | Mayfantasy"
        htmlDescription="Mayfantasy provides top industry level website design nad development, e-commerce development and marketing, web application development and customized development which suites special requirements."
      >
        <div className="services-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Services We Offer"
            includeContact
            src="/banner/services-banner.svg"
            alt="All Services Banner"
          />

          {/* Content */}
          <div className="container px-4 mx-auto">
            <Services />
          </div>
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default ServicesPage
