import Layout from 'components/Layout'
import HeroBanner from 'components/HeroBanner'
import { IContactUsEmailForm } from 'types/email.types'
import { useState } from 'react'
import Input from 'components/Input'
import { sendContactUsEmailRequest } from 'requests/email.request'

const ContactPage = () => {
  /**
   * Send Email
   */
  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: ''
  })
  const [form, setForm] = useState<IContactUsEmailForm>({
    name: '',
    email: '',
    content: ''
  })

  const onSubmit = () => {
    setStatus({
      loading: true,
      error: '',
      success: ''
    })
    if (form.name && form.email && form.content) {
      sendContactUsEmailRequest('hans@mayfantasy.com', form)
        .then(() => {
          setStatus({
            loading: false,
            error: '',
            success:
              'Thanks for your message, we will get back to you as soon as possible.'
          })
        })
        .catch(() =>
          setStatus({
            loading: false,
            error:
              'Internal Error: Please send us an email at info@mayfantasy.com.',
            success: ''
          })
        )
    }
  }

  return (
    <>
      <style jsx>{`
        .contact-page {
        }
      `}</style>
      <Layout
        pageAbsoluteUrl="https://www.mayfantasy.com/contact/"
        htmlTitle="Contact Us Now - Let us know what we can help | Mayfantasy"
        htmlDescription="Are you looking for a digital agency based in Toronto at a compatible price? Email us: info@mayfantasy.com or Call us: 1-709-697-5510."
      >
        <div className="contact-page">
          {/* Hero Banner */}
          <HeroBanner
            title="Let us know what we can help"
            includeContact
            src="/banner/contact-us-banner.png"
            alt="Contact Us Banner"
          />
          <br />
          <div>
            <div className="lg:w-1/2 m-auto">
              {/* Name */}
              <Input
                value={form.name}
                onChange={(name) =>
                  setForm({
                    ...form,
                    name
                  })
                }
                label="Name"
                id="name"
                placeholder="Your full name"
              />

              {/* Email */}
              <Input
                value={form.email}
                onChange={(email) =>
                  setForm({
                    ...form,
                    email
                  })
                }
                label="Email"
                id="email"
                placeholder="Your contact email address"
              />

              {/* Message */}
              <Input
                value={form.content}
                onChange={(content) =>
                  setForm({
                    ...form,
                    content
                  })
                }
                label="Message"
                id="message"
                isTextarea
                placeholder="Anything you want to ask, or just say Hi."
              />

              {!status.success && (
                <>
                  <br />
                  <div>
                    <button
                      className={`px-4 py-2 text-white text-2xl outline-none ${
                        form.name &&
                        form.email &&
                        form.content &&
                        !status.loading
                          ? 'bg-purple-700 hover:bg-opacity-75'
                          : 'bg-gray-600 cursor-not-allowed'
                      }`}
                      onClick={onSubmit}
                    >
                      {status.loading ? 'Loading...' : 'Submit'}
                    </button>
                  </div>
                  <br />
                </>
              )}

              {status.success && (
                <div className="text-green-500">{status.success}</div>
              )}
              {status.error && (
                <div className="text-red-500">{status.error}</div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
