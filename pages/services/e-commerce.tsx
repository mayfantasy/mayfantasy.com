import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'

const ServiceECommercePage = () => {
  return (
    <>
      <style jsx>{`
        .service-e-commerce-page {
        }
      `}</style>
      <Layout
        htmlTitle="E-Commerce Development and Marketing Service | Mayfantasy"
        htmlDescription="Have an idea to sell products on a beautiful web store, Amazon and eBay? Our experienced e-commerce experts will walk you through the whole process and help you build a solid business."
      >
        <div className="service-e-commerce-page">
          {/* Hero Banner */}
          <HeroBanner
            title="E-Commerce Solutions"
            includeContact
            src="/service/e-commerce-service.png"
            alt="E-Commerce Solutions Service Banner"
          />
          <br />
          <article>
            <p>
              Have an idea to sell products on a beautiful web store, Amazon and
              eBay? Our experienced e-commerce experts will walk you through the
              whole process and help you build a solid business.
            </p>
            <br />
            <div className="lg:flex">
              <div className="flex-1 pr-8">
                <h2 className="text-2xl">
                  <strong>Web Store</strong>
                </h2>
                <p>
                  Your Web Store is your products' official website where
                  customers get impressed by your brand and are willing to pay
                  for the products. Having a beautiful and reliable web store is
                  like having a solid base of your e-commerce business.{' '}
                </p>
                <p>
                  Our e-commerce professionals can help you build an attractive
                  and stable selling platform with all functionalities included.
                </p>
                <br />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl">
                  <strong>Marketplaces</strong>
                </h2>
                <p>
                  Large marketplaces like Amazon and eBay have billions of
                  visitors everyday. It has alreay become our life style.
                  However, list on these platforms and make a sell is not easy.
                </p>
                <p>
                  Our e-commerce experts will provide the most valuble knowledge
                  about listing products, boosting sales and attracting
                  customers. Your e-commerce kingdom is just around the corner.
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

export default ServiceECommercePage
