import { INavItem } from 'types/route.types'
import { pageRoutues } from 'helpers/route.helpers'
import ContactLine from './ContactLine'
import Link from 'next/link'

interface IProps {}
const Footer = (props: IProps) => {
  const navItems: INavItem[] = [
    pageRoutues.homePage,
    pageRoutues.aboutPage,
    pageRoutues.servicesPage,
    pageRoutues.worksPage,
    pageRoutues.contactPage
  ]

  const serviceItems: INavItem[] = [
    pageRoutues.serviceWebsitePage,
    pageRoutues.serviceEcommercePage,
    pageRoutues.serviceSaasPage,
    pageRoutues.serviceCustomSolutions
  ]
  return (
    <>
      <style jsx>{`
        .footer {
          .footer__logo {
            width: 120px;
          }
        }
      `}</style>
      <footer className="footer flex flex-col lg:flex-row py-8">
        {/* Logo & Contact */}
        <div className="lg:w-1/2 mr-16 mb-16">
          <div className="footer__logo">
            <img alt="Mayfantasy Logo" src="/logo.png" className="w-full" />
          </div>
          <br />
          <p>
            We are Toronto based digital agency specialized in designing and
            developing website, e-commerce and web applications.
          </p>
          <br />
          <br />
          <ContactLine />
        </div>

        {/* Navigation */}
        <div className="flex-1 mr-8 mb-16">
          <h3 className="text-2xl">NAVIGATION</h3>
          <br />
          {navItems.map((item) => (
            <div className="mb-1 text-gray-600 hover:text-black" key={item.key}>
              <Link href={item.url}>
                <a>{item.name}</a>
              </Link>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="flex-1 mb-16">
          <h3 className="text-2xl">SERVICES</h3>
          <br />
          {serviceItems.map((item) => (
            <div className="mb-1 text-gray-600 hover:text-black" key={item.key}>
              <Link href={item.url}>
                <a>{item.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
