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
      src: '/service/website-service.svg',
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
      src: '/service/saas-service.svg',
      title: 'SaaS Development',
      subtitle: 'Software as a Service',
      content: (
        <p>
          Need a handy business application to accelerate your daily work or
          resell? Building robust, multi-tenant Software-as-a-Service
          applications is our specialty, we are here to help.
        </p>
      ),
      url: pageRoutues.serviceSaasPage.url
    },
    {
      src: '/service/e-commerce-service.svg',
      title: 'E-Commerce Solutions',
      subtitle: 'Everything you need to earn online',
      content: (
        <p>
          Start selling products and services on a beautiful web store now, or
          Amazon and eBay. No metter which, our experienced experts will walk
          you through the whole e-commerce process and help you build a solid
          business.
        </p>
      ),
      url: pageRoutues.serviceEcommercePage.url
    },
    {
      src: '/service/custom-service.svg',
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
