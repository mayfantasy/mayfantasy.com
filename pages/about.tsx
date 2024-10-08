import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'

const AboutPage = () => {
  return (
    <>
      <style jsx>{`
        .about-page {
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/about/"
        htmlTitle="Top Ranked Website and E-Commerce Agency in Toronto | Mayfantasy"
        htmlDescription="Mayfantasy is a full stack digital agency located in Toronto. Our young, experienced, and passionate team delivers the world-class digital projects to help you thrive."
      >
        <div className="about-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Know More About Us"
            includeContact
            src="/banner/about-us-banner.svg"
            // src="/banner-900x480/about-us-banner.png"
            alt="About Us Banner"
          />
          <br />
          {/* Content */}
          <article className="container px-4 mx-auto">
            <p>
              Mayfantasy is a full stack digital agency located in Toronto. Our
              young, experienced, and passionate team delivers the world-class
              digital projects to help you thrive.
            </p>
            <br />

            <h2 className="text-2xl">
              <strong>Our Expertise</strong>
            </h2>
            <p>
              We are well experienced and specialized in the area of website
              design & development, SaaS (Service as a Software) and full
              e-commerce life cycle. The products we proudly delivered to our
              client have brought amazing results over the past few years.
            </p>
            <br />

            <h2 className="text-2xl">
              <strong>Our Mission</strong>
            </h2>
            <p>
              We love to work together and help small businesses and startups.
              We believe that every small business and startup will be the
              rising star with the right help, that’s why our mission is to
              strengthen the capabilities of startups as a global leader of
              future technologies.
            </p>
            <br />

            <h2 className="text-2xl">
              <strong>Why Us?</strong>
            </h2>
            <p>
              <strong>Technology:</strong> Cutting edge while stable, more
              control with less dependencies
              <br />
              <strong>Work:</strong> User experience focused, morden and
              functional
              <br />
              <strong>Team:</strong> Young, passionate and experienced Service:
              first-rate customer service, responsible throughout project life
              cycle
            </p>
          </article>
          <br />
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
