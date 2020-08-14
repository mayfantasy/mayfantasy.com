import Layout from 'components/Layout'

const ServiceECommercePage = () => {
  return (
    <>
      <style jsx>{`
        .service-e-commerce-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="E-Commerce | Mayfantasy">
        <div className="service-e-commerce-page">
          Service E-Commerce Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default ServiceECommercePage
