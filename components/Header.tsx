import { CSSProperties } from 'react'
import Navigation from 'components/libs/react-sticky-nav'
import { css, jsx } from '@emotion/core'
import { INavItem } from 'types/route.types'
import { pageRoutues } from 'helpers/route.helpers'
import Link from 'next/link'

interface IProps {}
const Header = (props: IProps) => {
  const {} = props

  const items: INavItem[] = [
    pageRoutues.homePage,
    pageRoutues.aboutPage,
    {
      ...pageRoutues.servicesPage,
      children: [
        pageRoutues.serviceWebsitePage,
        pageRoutues.serviceSaasPage,
        pageRoutues.serviceEcommercePage,
        pageRoutues.serviceCustomSolutions
      ]
    },
    pageRoutues.worksPage,
    pageRoutues.contactPage
  ]

  return (
    <>
      <style jsx>{`
        .header {
          z-index: 99;
          .header__nav-item {
            border-bottom: 3px solid transparent;
            &:hover {
              border-bottom: 3px solid black;
            }
          }
        }
      `}</style>
      <Navigation disabled={false}>
        {(position) => {
          const isSticked = position === 'sticky-hidden'
          return (
            <>
              <header
                className="header flex flex-row justify-between items-center bg-white transition-all duration-300 ease-in-out"
                style={{
                  height: isSticked ? 50 : 78,
                  borderBottom: isSticked
                    ? '2px solid #e6e7e8'
                    : '2px solid transparent'
                }}
              >
                <div
                  className="header__logo transition-all duration-300 ease-in-out"
                  style={{
                    width: isSticked ? 60 : 100
                  }}
                >
                  <Link href={pageRoutues.homePage.url}>
                    <a>
                      <img
                        src="/logo.png"
                        alt="Mayfantasy Logo"
                        className="w-full transition-all duration-150 ease-in-out"
                      />
                    </a>
                  </Link>
                </div>
                <nav
                  className={`header__nav flex flex-row text-sm lg:text-base ${
                    isSticked ? 'text-sm' : ''
                  }`}
                >
                  {items.map((item) => (
                    <div
                      className="header__nav-item mx-2 lg:mx-4 transition-all duration-150 ease-in-out text-gray-600 hover:text-black"
                      key={item.key}
                    >
                      <Link href={item.url}>
                        <a className="transition-all duration-150 ease-in-out">
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </nav>
              </header>
            </>
          )
        }}
      </Navigation>
    </>
  )
}

export default Header
