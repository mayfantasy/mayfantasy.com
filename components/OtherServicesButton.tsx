import { pageRoutues } from 'helpers/route.helpers'
import Link from 'next/link'

const OtherServicesButton = () => {
  return (
    <Link href={pageRoutues.servicesPage.url}>
      <button className="px-4 py-2 text-white outline-none bg-purple-700 hover:bg-opacity-75">
        View More Services
      </button>
    </Link>
  )
}

export default OtherServicesButton
