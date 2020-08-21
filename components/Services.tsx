import ContentBlock from './ContentBlock'
import { pageRoutues } from 'helpers/route.helpers'
import Link from 'next/link'

const Services = () => {
  const items: Array<{
    src: string
    title: string
    subtitle: string
    content: string | React.ReactNode
    url: string
  }> = [
    {
      src: '/service/website-service.png',
      title: 'Website Development',
      subtitle: 'From Design to Development',
      content: (
        <p>
          Presence on the internet has become so important in the modern world.
          That’s why we are here to help. We begin every project with rigorous
          research and strategy to guide our design and development, so that we
          can provide the right solutions and drive the best result for our
          clients.
        </p>
      ),
      url: pageRoutues.serviceWebsitePage.url
    },
    {
      src: '/service/saas-service.png',
      title: 'SaaS',
      subtitle: 'Software as a Service',
      content: (
        <p>
          Need a handy business application to accelerate your daily work and
          save the labour? Our professionals can help you build the modern and
          functional services right for your business.
        </p>
      ),
      url: pageRoutues.serviceSaasPage.url
    },
    {
      src: '/service/e-commerce-service.png',
      title: 'E-Commerce',
      subtitle: 'Everything you need to make sales',
      content: (
        <p>
          Have products ready to sell on a beautiful web store, Amazon and eBay?
          Our experienced e-commerce experts will walk you through the whole
          process and help you build a solid business.
        </p>
      ),
      url: pageRoutues.serviceEcommercePage.url
    },
    {
      src: '/service/custom-service.png',
      title: 'Customized',
      subtitle: 'Fully Customized Digital Services',
      content: (
        <p>
          Have a dream but don’t know where to start? No worries, our digital
          experts are here to help you define, research and realize your digital
          dream, in a professional way.
        </p>
      ),
      url: pageRoutues.serviceCustomSolutions.url
    }
  ]
  return (
    <div className="divide-y divide-gray-400">
      {items.map((item, index) => (
        <ContentBlock
          right={index % 2 !== 0}
          key={item.title}
          src={item.src}
          alt={item.title}
          content={
            <>
              <h2 className="text-3xl">
                <strong>{item.title}</strong>
              </h2>
              <p className="text-gray-600">{item.subtitle}</p>
              <br />
              {item.content}
              <br />
              <div className="mb-4">
                <Link href={item.url}>
                  <button className="px-4 py-2 text-white outline-none bg-purple-700 hover:bg-opacity-75">
                    Learn More
                  </button>
                </Link>
              </div>
            </>
          }
        />
      ))}
    </div>
  )
}

export default Services
