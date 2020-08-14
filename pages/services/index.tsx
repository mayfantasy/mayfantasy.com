import Layout from 'components/Layout'

const ServicesPage = () => {
  return (
    <>
      <style jsx>{`
        .services-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="Services | Mayfantasy">
        <div className="services-page">
          Services Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default ServicesPage
