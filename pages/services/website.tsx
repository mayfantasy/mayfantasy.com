import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import { Steps } from 'antd'
import { StepProps } from 'antd/lib/steps'

const { Step } = Steps

const steps: StepProps[] = [
  {
    title: 'Research and Strategy',
    description: (
      <p>
        The best decisions are always born from in-depth research and analysis.
        There are no lucky guesses in our process - we only believe in
        research-driven strategy and most importantly. We make us ‘become’ you.
      </p>
    )
  },
  {
    title: 'Content Structuring and Creation',
    description: (
      <p>
        The information architecture determines how visitors gather information
        through the website and whether they feel helpful and inspiring. Our
        professional content writers will help you build a solid content
        structure which will reach the right target and create conversions.
      </p>
    )
  },
  {
    title: 'Prototyping and UX/UI Design',
    description: (
      <p>
        There is far more to design than attractive graphics. A user friendly
        page structure and user interface can help the visitors find what they
        need faster and make them feel satisfying. Our clients benefit from our
        experience – no matter for what business, we can design a site that will
        engage visitors and keep them coming back.
      </p>
    )
  },
  {
    title: 'Development and Testing',
    description:
      'Now the site is well structured and attractive, it’s time to make our dream come true. Our experienced web developers will deliver the highest industry level of work with the cutting edge technologies and industry best practices. At the end of the development cycle, an end-to-end testing process will be started to ensure the high quality.'
  },
  {
    title: 'Launch and Done',
    description: (
      <p>
        Launch the website in the bazing fast environment and let’s rock the
        business with confidence.
      </p>
    )
  }
]

const ServiceWebsitePage = () => {
  return (
    <>
      <style jsx global>{`
        .service-website-page {
          .ant-steps-item-process .ant-steps-item-icon {
            background-color: #6b46c1;
            border-color: #6b46c1;
          }
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/services/website/"
        htmlTitle="Website Design, Development and Hosting Service | Mayfantasy"
        htmlDescription="resence on the internet has become so important in the modern world. That’s why we are here to help. We begin every project with rigorous research and strategy to guide our design and development, so that we can provide the right solutions and drive the best result for our clients."
      >
        <div className="service-website-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Website Design & Development"
            includeContact
            src="/service/website-service.svg"
            alt="Website Development Service Banner"
          />
          <br />
          <article className="container px-4 mx-auto">
            <p>
              Presence on the internet has become so important in the modern
              world. That’s why we are here to help. We begin every project with
              rigorous research and strategy to guide our design and
              development, so that we can provide the right solutions and drive
              the best result for our clients.
            </p>
            <br />
            <h2 className="text-2xl mb-2">
              <strong>Our Process</strong>
            </h2>
            <Steps direction="vertical" size="default">
              {steps.map((step, index) => (
                <Step key={index} status="process" {...step} />
              ))}
            </Steps>
          </article>
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default ServiceWebsitePage
