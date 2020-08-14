import Layout from 'components/Layout'

const AboutPage = () => {
  return (
    <>
      <style jsx>{`
        .about-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="About Us | Mayfantasy">
        <div className="about-page">
          About Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
