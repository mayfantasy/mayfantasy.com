import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'

const ServiceWebsitePage = () => {
  return (
    <>
      <style jsx>{`
        .service-website-page {
        }
      `}</style>
      <Layout
        htmlTitle="Website Design, Development and Hosting Service | Mayfantasy"
        htmlDescription="Website Presence on the internet has become so important in the modern world. Don’t have time to do all the tedious work? Don’t know where to start? We are here to help you build the beautiful one."
      >
        <div className="service-website-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Website Design & Development"
            includeContact
            src="/service/website-service.png"
            alt="Website Development Service Banner"
          />
          <br />
          <article>
            <p>
              Website Presence on the internet has become so important in the
              modern world. Don’t have time to do all the tedious work? Don’t
              know where to start? We are here to help you build the beautiful
              one.
            </p>
            <br />
            <div className="lg:flex">
              <div className="flex-1 pr-8">
                <h2 className="text-2xl">
                  <strong>Design</strong>
                </h2>
                <p>
                  There is far more to design than attractive graphics. The
                  information architecture determines how visitors will navigate
                  your website and whether they find it user friendly. Our
                  clients benefit from our experience – from fast-loading
                  regional portals to high-bandwidth Flash animations, we can
                  design a site that will engage visitors and keep them coming
                  back.
                </p>
                <br />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl">
                  <strong>Development</strong>
                </h2>
                <p>
                  We develop the most elaborative, yet user-friendly solutions
                  in the industry. Because we code from the first line by
                  ourselves. Picking up a random website template and filling up
                  some content is not acceptable by us. We'd like to control
                  more and depend less, suite 100% of your needs, instead of
                  adjusting other existing plugins. That's why we write every
                  personalized high quality feature for you.
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

export default ServiceWebsitePage
