import Layout from 'components/Layout'

const WorksPage = () => {
  return (
    <>
      <style jsx>{`
        .works-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="Works | Mayfantasy">
        <div className="works-page">
          Works Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default WorksPage
