import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import OtherServicesButton from 'components/OtherServicesButton'

const ServiceECommercePage = () => {
  return (
    <>
      <style jsx>{`
        .service-e-commerce-page {
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/services/e-commerce/"
        htmlTitle="E-Commerce Development and Marketing Service | Mayfantasy"
        htmlDescription="Have an idea to sell products on a beautiful web store, Amazon and eBay? Our experienced e-commerce experts will walk you through the whole process and help you build a solid business."
      >
        <div className="service-e-commerce-page">
          {/* Hero Banner */}
          <HeroBanner
            title="E-Commerce Solutions"
            includeContact
            src="/service/e-commerce-service.svg"
            alt="E-Commerce Solutions Service Banner"
          />
          <br />
          <article className="container px-4 mx-auto">
            <div className="lg:flex">
              <div className="flex-1 pr-8">
                <h2 className="text-2xl mb-2">
                  <strong>Web Store</strong>
                </h2>
                <p>
                  By showcasing a beautiful and functional official product
                  website, customers get impressed by your brand and willing to
                  pay. A well planned web store is definitely a solid base of
                  your e-commerce business.
                </p>
                <p>
                  Thanks to the powerful e-commerce systems of Shopify and
                  BigCommerce, it's easy to handle large inventory, orders and
                  payment gateways.
                </p>
              </div>
              <br />
              <div className="flex-1">
                <h2 className="text-2xl mb-2">
                  <strong>Marketplaces</strong>
                </h2>
                <p>
                  If you’re in the eCommerce industry, selling on Amazon or eBay
                  has become the best bet for maximizing your reach and,
                  ultimately, your profit.
                </p>
                <p>
                  We will help you create new products to the Amazon catalogue
                  whenever you want. We will guide you through, or even take
                  care of product sourcing, logistics, customer service, digital
                  marketing and product shipping, you name it.
                </p>
                <br />
              </div>
            </div>
          </article>
          <br />
          <br />
          <div className="container px-4 mx-auto text-center">
            <OtherServicesButton />
          </div>
          <br />
          <br />
        </div>
      </Layout>
    </>
  )
}

export default ServiceECommercePage
