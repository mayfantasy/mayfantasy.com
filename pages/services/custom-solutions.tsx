import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'

const ServiceCustomSolutionsPage = () => {
  return (
    <>
      <style jsx>{`
        .service-custom-solutions-page {
        }
      `}</style>
      <Layout htmlTitle="Custom Solutions for Your Business’es Unique Requirements | Mayfantasy">
        <div className="service-custom-solutions-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Custom Solutions"
            includeContact
            src="/service/custom-service.png"
            alt="Customized Solutions Service Banner"
          />
          <br />
          <article>
            <p>
              In the digital era, business are relying on more and more digital
              services --- not just for broadcasting your business, but let the
              latest technology help you build the long lasting empire.
            </p>
            <p>
              If you have a dream, we can help. Our digital consultants are
              happy to provide the most professional digital business solutions
              that customized for you.
            </p>
            <p>Tell us your dream now and let us help you out.</p>
          </article>
          <br />
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default ServiceCustomSolutionsPage
