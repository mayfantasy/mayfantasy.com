import Layout from 'components/Layout'

const ServiceWebsitePage = () => {
  return (
    <>
      <style jsx>{`
        .service-website-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="Website | Mayfantasy">
        <div className="service-website-page">
          Service Website Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default ServiceWebsitePage
