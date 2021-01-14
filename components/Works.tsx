import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { pageRoutues } from 'helpers/route.helpers'
import Image from 'next/image'

const Works = () => {
  const items: { name: string; src: string }[] = [
    {
      name: 'Veltro Development',
      src: '/screenshot/veltro-screenshot.png'
    },
    {
      name: 'Dora Stars Gift Store',
      src: '/screenshot/dora-stars-screenshot.png'
    },
    {
      name: 'City High School',
      src: '/screenshot/city-high-school-screenshot.png'
    },
    {
      name: 'Start Your Engine Club',
      src: '/screenshot/startyourengine-screenshot.png'
    },
    {
      name: 'Harley Hardy',
      src: '/screenshot/harley-hardy-screenshot.png'
    },
    {
      name: 'Pro Promo',
      src: '/screenshot/propromo-screenshot.png'
    },
    {
      name: 'Monfent CMS',
      src: '/screenshot/monfent-cms-screenshot.png'
    }
  ]

  return (
    <>
      <style jsx>{`
        .works {
          .works__item {
            &:hover {
              .works__image {
                transform: scale(1.2, 1.2);
                filter: brightness(0.3);
              }
              .works__item-name {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      `}</style>
      <div className="flex flex-row flex-wrap works">
        {items.map((item, index) => (
          <div
            key={item.name}
            className={`
            w-1/2
            lg:w-1/4
            works__item
            transition-all
            duration-300
            ease-in-out
            cursor-pointer
            overflow-hidden
            text-center
            py-2
            `}
          >
            <div className="relative">
              <div className="works__image duration-300 ease-in-out ">
                <Image
                  width={1000}
                  height={1167}
                  src={item.src}
                  alt={item.name}
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-full h-full top-0 left-0 absolute hidden works__item-name text-white">
                {item.name}
              </div>
            </div>
          </div>
        ))}
        <div className="w-1/2 lg:w-1/4 works__item">
          <Link href={pageRoutues.contactPage.url}>
            <div className="h-full w-full bg-black flex justify-center items-center cursor-pointer">
              <div className="text-white flex items-center">
                <a>
                  <span className="mr-4">Your Project</span>
                  <FontAwesomeIcon icon={faPlus} />
                </a>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Works
