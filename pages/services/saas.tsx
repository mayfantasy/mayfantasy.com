import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'

const ServiceSaasPage = () => {
  return (
    <>
      <style jsx>{`
        .service-saas-page {
        }
      `}</style>
      <Layout htmlTitle="SaaS | Mayfantasy">
        <div className="service-saas-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Service as a Software"
            includeContact
            src="/service/saas-service.png"
          />
          <br />
          <article>
            {/* <p>
              Website Presence on the internet has become so important in the
              modern world. Don’t have time to do all the tedious work? Don’t
              know where to start? We are here to help you build the beautiful
              one.
            </p>
            <br /> */}
            <div className="lg:flex">
              <div className="flex-1 pr-8">
                <h2 className="text-2xl">
                  <strong>What is SaaS?</strong>
                </h2>
                <p>
                  SaaS (Software as a Service), also known as Web-based
                  software, is a modern software model that allows us handle
                  almost everything online, just like what we did on our
                  computers in the old times. The advantage is obvious:
                  everything we see is update-to-date, we don't need to worry
                  about software update and data syncronization, the cloud is
                  handling everything for us.
                </p>
                <br />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl">
                  <strong>Our Expertise</strong>
                </h2>
                <p>
                  Our team is well experienced in the SaaS industry. From
                  Strategic Planning, Requirement Gathering, to Grapic Design,
                  Development, and to the final Testing and Publishing, we will
                  provide the most professional services and use industrial
                  leading tools and cutting edge technologies to keep our work
                  at the highest industrial level.
                </p>
                <br />
              </div>
            </div>
          </article>
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default ServiceSaasPage
