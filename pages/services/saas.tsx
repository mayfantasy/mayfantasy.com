import Layout from 'components/Layout'

const ServiceSaasPage = () => {
  return (
    <>
      <style jsx>{`
        .service-saas-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="SaaS | Mayfantasy">
        <div className="service-saas-page">
          Service Saas Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default ServiceSaasPage
