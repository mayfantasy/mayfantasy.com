import Link from 'next/link'
import { pageRoutues } from 'helpers/route.helpers'

const CopyrightLine = () => {
  return (
    <div className="py-4 border-t-1 border-grey-600 text-center text-xs">
      <span className="mr-4">© 2021 Mayfantasy. All Rights Reserved.</span>
      <Link href={pageRoutues.privacyPage.url}>
        <a className="mr-4 text-gray-600">Privacy Statement</a>
      </Link>
      <Link href={pageRoutues.termsPage.url}>
        <a className="mr-4 text-gray-600">Terms of Use</a>
      </Link>
    </div>
  )
}

export default CopyrightLine
