import { INavItem } from 'types/route.types'

export const pageRoutues = {
  homePage: {
    name: 'Home',
    key: 'home',
    url: '/'
  } as INavItem,
  servicesPage: {
    name: 'Services',
    key: 'services',
    url: '/services'
  } as INavItem,
  serviceWebsitePage: {
    name: 'Webiste',
    key: 'website',
    url: '/website'
  },
  serviceSaasPage: {
    name: 'Saas',
    key: 'saas',
    url: '/saas'
  },
  serviceEcommercePage: {
    name: 'E-Commerce',
    key: 'e-commerce',
    url: '/e-commerce'
  },
  serviceCustomSolutions: {
    name: 'Custom Solutions',
    key: 'custom-solutions',
    url: '/custom-solutions'
  },
  aboutPage: {
    name: 'About Us',
    key: 'about',
    url: '/about'
  } as INavItem,
  contactPage: {
    name: 'Contact Us',
    key: 'contact',
    url: '/contact'
  },
  worksPage: {
    name: 'Works',
    key: 'works',
    url: '/works'
  },
  privacyPage: {
    name: 'Privacy Statement',
    key: 'privacy',
    url: '/privacy-statememt'
  },
  termsPage: {
    name: 'Terms of Use',
    key: 'terms',
    url: '/terms-of-use'
  }
}
