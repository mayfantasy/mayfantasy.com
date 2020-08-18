import Layout from 'components/Layout'
import Title from 'components/Title'
import ContentBlock from 'components/ContentBlock'
import ContactLine from 'components/ContactLine'
import ServicePartners from 'components/ServicePartners'

const HomePage = () => {
  return (
    <>
      <style jsx>{`
        .home-page {
          .home-page__hero-banner {
          }
        }
      `}</style>
      <Layout htmlTitle="Home | Mayfantasy">
        <div className="home-page">
          {/* Hero Banner */}
          <section className="home-page__hero-banner flex flex-col lg:flex-row items-center py-4">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold">
                Results-driven Creative Digital Agency
              </h1>
              <ContactLine />
            </div>
            <div className="flex-1">
              <img src="/hero-image.png" className="w-full" />
            </div>
          </section>

          {/* Introduction */}
          <section>
            <Title>Who We Are ?</Title>
            <br />
            <p className="text-2xl py-8">
              We are Toronto based digital agency specialized in
              <br />
              designing and developing{' '}
              <strong>website, e-commerce and web applications.</strong>
            </p>
          </section>

          {/* Services */}
          <section>
            <Title right>What We Do ?</Title>
            <div className="divide-y divide-gray-400">
              <ContentBlock
                src="/hero-image.png"
                content={
                  <>
                    <h2 className="text-3xl">
                      <strong>Website Development</strong>
                    </h2>
                    <p className="text-gray-600">From Design to Development</p>
                    <br />
                    <p>
                      Presence on the internet has become so important in the
                      modern world. Don’t have time to do all the tedious work?
                      Don’t know where to start? We are here to help you build
                      the beautiful one.
                    </p>
                  </>
                }
              />
              <ContentBlock
                right
                src="/hero-image.png"
                content={
                  <>
                    <h2 className="text-3xl">
                      <strong>SaaS</strong>
                    </h2>
                    <p className="text-gray-600">Software as a Service</p>
                    <br />
                    <p>
                      Presence on the internet has become so important in the
                      modern world. Don’t have time to do all the tedious work?
                      Don’t know where to start? We are here to help you build
                      the beautiful one.
                    </p>
                  </>
                }
              />
              <ContentBlock
                src="/hero-image.png"
                content={
                  <>
                    <h2 className="text-3xl">
                      <strong>E-Commerce</strong>
                    </h2>
                    <p className="text-gray-600">
                      Everything you need to make sales
                    </p>
                    <br />
                    <p>
                      Presence on the internet has become so important in the
                      modern world. Don’t have time to do all the tedious work?
                      Don’t know where to start? We are here to help you build
                      the beautiful one.
                    </p>
                  </>
                }
              />
              <ContentBlock
                right
                src="/hero-image.png"
                content={
                  <>
                    <h2 className="text-3xl">
                      <strong>Customized</strong>
                    </h2>
                    <p className="text-gray-600">
                      Fully Customized Digital Services
                    </p>
                    <br />
                    <p>
                      Need a handy business application to accelerate your daily
                      work and save the labour? Our professionals can help you
                      build the modern and functional services right for your
                      business.
                    </p>
                  </>
                }
              />
            </div>
          </section>

          {/* Service Parners */}
          <section className="mb-16">
            <Title>Service Partners</Title>
            <br />
            <ServicePartners />
          </section>

          {/* Our Work */}
          <section>
            <Title right>Our Work</Title>
            <p>...</p>
          </section>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default HomePage
