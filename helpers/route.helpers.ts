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
    url: '/services/website'
  },
  serviceSaasPage: {
    name: 'Saas',
    key: 'saas',
    url: '/services/saas'
  },
  serviceEcommercePage: {
    name: 'E-Commerce',
    key: 'e-commerce',
    url: '/services/e-commerce'
  },
  serviceCustomSolutions: {
    name: 'Custom Solutions',
    key: 'custom-solutions',
    url: '/services/custom-solutions'
  },
  aboutPage: {
    name: 'About',
    key: 'about',
    url: '/about'
  } as INavItem,
  contactPage: {
    name: 'Contact',
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
    url: '/privacy-statement'
  },
  termsPage: {
    name: 'Terms of Use',
    key: 'terms',
    url: '/terms-of-use'
  }
}
