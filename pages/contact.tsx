import Layout from 'components/Layout'

const ContactPage = () => {
  return (
    <>
      <style jsx>{`
        .contact-page {
          background-color: yellow;
        }
      `}</style>
      <Layout htmlTitle="Contact Us | Mayfantasy">
        <div className="contact-page">
          Contact Page<p>test</p>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
