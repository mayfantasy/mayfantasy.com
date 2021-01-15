import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import Tag from 'components/Tag'
import OtherServicesButton from 'components/OtherServicesButton'

const ServiceSaasPage = () => {
  return (
    <>
      <style jsx>{`
        .service-saas-page {
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/services/saas/"
        htmlTitle="Service as a Software (SaaS) Development | Mayfantasy"
        htmlDescription="Our team is well experienced in the SaaS industry. From Strategic Planning, Requirement Gathering, to UX Design, Development, and to the final Test and Deployment, we provide the highest industrial level service."
      >
        <div className="service-saas-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Service as a Software (SaaS) Development"
            includeContact
            src="/service/saas-service.svg"
            alt="Service as a Software Service Banner"
          />
          <br />
          <article className="container px-4 mx-auto">
            {/* <p>
              Website Presence on the internet has become so important in the
              modern world. Don’t have time to do all the tedious work? Don’t
              know where to start? We are here to help you build the beautiful
              one.
            </p>
            <br /> */}
            <div className="lg:flex">
              <div className="flex-1 pr-8">
                <h2 className="text-2xl mb-2">
                  <strong>What is SaaS?</strong>
                </h2>
                <p>
                  SaaS (Software as a Service), also known as Web-based
                  software, is a modern software model that allows us handle
                  almost everything online. Everything we see is update-to-date,
                  we don't need to worry about software update and data
                  syncronization, the cloud is handling everything for us.
                </p>
                <br />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl mb-2">
                  <strong>Our Expertise</strong>
                </h2>
                <p>
                  Building robust, multi-tenant Software-as-a-Service
                  applications is our specialty. From strategic planning, to UX
                  design and Development, we provide the most professional
                  services with our industrial leading technologies.
                </p>
                <br />
              </div>
            </div>
            <div>
              <h2 className="text-2xl mb-2">
                <strong>Technology Stack</strong>
              </h2>
              <p>
                We have experiece with projects based on these cutting edge
                technologies: <Tag>Nodejs</Tag>
                <Tag>React.js</Tag>
                <Tag>Angular 8+</Tag>
                <Tag>GraphQL</Tag>
                <Tag>REST API</Tag>
                <Tag>MongoDB</Tag>
                <Tag>FaunaDB</Tag>
                <Tag>MySQL</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>Next.js</Tag>
                <Tag>Headless CMS</Tag>
                <Tag>Shopify</Tag>
                <Tag>BigCommerce</Tag>
                <Tag>Liquid</Tag>
                <Tag>Google Cloud Platform</Tag> and more.
              </p>
            </div>
          </article>
          <br />
          <br />
          <div className="container px-4 mx-auto text-center text-center">
            <OtherServicesButton />
          </div>
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default ServiceSaasPage
