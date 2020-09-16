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
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/"
        htmlTitle="Mayfantasy - Results-driven Creative Digital Agency"
        htmlDescription="Mayfantasy is a Toronto based digital agency specialized in producing top industrial level websites, e-commerce and web applications (SaaS)."
      >
        <div className="home-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Results-driven Creative Digital Agency"
            tagline="We build modern websites, web applications and e-commerce products that help you shine."
            includeContact
            src="/hero-image.png"
            alt="Home Page Banner"
          />
          <br />
          <br />

          {/* Introduction */}
          <section className="container px-4 mx-auto">
            <Title>Who We Are ?</Title>
            <br />
            <p className="text-2xl py-8">
              Mayfantasy is a Toronto based digital agency specialized in
              <br />
              building the highest industrial level{' '}
              <strong>
                websites, e-commerce products and web applications (SaaS)
              </strong>
              .
            </p>
          </section>

          <br />
          <br />

          {/* Services */}
          <section className="container px-4 mx-auto">
            <Title right>What We Do ?</Title>
            <br />
            <Services />
          </section>

          {/* Service Parners */}
          <section className="container px-4 mx-auto mb-16">
            <Title>Service Partners</Title>
            <br />
            <br />
            <ServicePartners />
          </section>

          {/* Our Work */}
          <section className="container px-4 mx-auto">
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
