import Layout from 'components/Layout'
import Title from 'components/Title'
import ContentBlock from 'components/ContentBlock'
import ContactLine from 'components/ContactLine'
import ServicePartners from 'components/ServicePartners'
import Works from 'components/Works'
import Services from 'components/Services'
import HeroBanner from 'components/HeroBanner'

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
          <HeroBanner
            title="Results-driven Creative Digital Agency"
            includeContact
            src="/hero-image.png"
            alt="Home Page Banner"
          />

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
            <Services />
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
            <br />
            <Works />
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
