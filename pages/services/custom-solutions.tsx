import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import OtherServicesButton from 'components/OtherServicesButton'

const ServiceCustomSolutionsPage = () => {
  return (
    <>
      <style jsx>{`
        .service-custom-solutions-page {
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/services/custom-solutions/"
        htmlTitle="Custom Solutions for Your Business’es Unique Requirements | Mayfantasy"
        htmlDescription="If you have a dream, we can help. Our digital consultants are happy to provide the most professional digital business solutions that customized for you."
      >
        <div className="service-custom-solutions-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Custom Solutions"
            includeContact
            src="/service/custom-service.svg"
            alt="Customized Solutions Service Banner"
          />
          <br />
          <article className="container px-4 mx-auto">
            <p>
              In the digital era, business are relying on more and more digital
              services --- not just shouting out for your business, but let the
              latest technology that helps you build the long lasting empire.
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
          <div className="container px-4 mx-auto text-center">
            <OtherServicesButton />
          </div>
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
