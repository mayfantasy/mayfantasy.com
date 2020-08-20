import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { pageRoutues } from 'helpers/route.helpers'

const Works = () => {
  const items: { name: string; src: string }[] = [
    {
      name: 'Veltro Development',
      src: '/screenshot/veltro-screenshot.png'
    },
    {
      name: 'Ted A Car',
      src: '/screenshot/tedacar-screenshot.png'
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
      name: 'Monfent CMS',
      src: '/screenshot/monfent-cms-screenshot.png'
    },
    {
      name: 'MF Digital Consult',
      src: '/screenshot/mayfantasy-screenshot.png'
    }
  ]

  return (
    <>
      <style jsx>{`
        .works {
          .works__item {
            &:hover {
              img {
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
            w-1/4
            works__item
            transition-all
            duration-300
            ease-in-out
            cursor-pointer
            overflow-hidden
            text-center
            py-2
            ${
              (index + 1) % 4 === 1
                ? 'pl-2 pr-1'
                : (index + 1) % 4 === 0
                ? 'pl-1 pr-2'
                : 'px-1'
            }
            bg-black
            `}
          >
            <div className="relative">
              <img
                src={item.src}
                className="w-full duration-300 ease-in-out cursor-pointer"
              />
              <div className="w-full h-full top-0 left-0 absolute hidden works__item-name text-white text-2xl">
                {item.name}
              </div>
            </div>
          </div>
        ))}
        <div className="w-1/4 works__item">
          <Link href={pageRoutues.contactPage.url}>
            <div className="h-full w-full bg-black flex justify-center items-center cursor-pointer">
              <div className="text-white flex items-center text-xl">
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
