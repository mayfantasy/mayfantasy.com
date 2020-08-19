import ContentBlock from './ContentBlock'

const Services = () => {
  const items: Array<{
    src: string
    title: string
    subtitle: string
    content: string | React.ReactNode
  }> = [
    {
      src: '/website-service.png',
      title: 'Website Development',
      subtitle: 'From Design to Development',
      content: (
        <p>
          Presence on the internet has become so important in the modern world.
          Don’t have time to do all the tedious work? Don’t know where to start?
          We are here to help you build the beautiful one.
        </p>
      )
    },
    {
      src: '/saas-service.png',
      title: 'SaaS',
      subtitle: 'Software as a Service',
      content: (
        <p>
          Need a handy business application to accelerate your daily work and
          save the labour? Our professionals can help you build the modern and
          functional services right for your business.
        </p>
      )
    },
    {
      src: '/e-commerce-service.png',
      title: 'E-Commerce',
      subtitle: 'Everything you need to make sales',
      content: (
        <p>
          Have products ready to sell on a beautiful web store, Amazon and eBay?
          Our experienced e-commerce experts will walk you through the whole
          process and help you build a solid business.
        </p>
      )
    },
    {
      src: '/custom-service.png',
      title: 'Customized',
      subtitle: 'Fully Customized Digital Services',
      content: (
        <p>
          Have a dream but don’t know where to start? No worries, our digital
          experts are here to help you define, research and realize your digital
          dream, in a professional way.
        </p>
      )
    }
  ]
  return (
    <div className="divide-y divide-gray-400">
      {items.map((item, index) => (
        <ContentBlock
          right={index % 2 !== 0}
          key={item.title}
          src={item.src}
          content={
            <>
              <h2 className="text-3xl">
                <strong>{item.title}</strong>
              </h2>
              <p className="text-gray-600">{item.subtitle}</p>
              <br />
              {item.content}
            </>
          }
        />
      ))}
    </div>
  )
}

export default Services
