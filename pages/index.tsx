import Layout from 'components/Layout'

const HomePage = () => {
  return (
    <>
      <style jsx>{`
        .home-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="Home | Mayfantasy">
        <div className="home-page">
          Home Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default HomePage
