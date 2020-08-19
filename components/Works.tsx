import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { pageRoutues } from 'helpers/route.helpers'

const Works = () => {
  const items: { name: string; src: string }[] = [
    {
      name: 'Veltro Development',
      src: '/veltro-screenshot.png'
    },
    {
      name: 'Ted A Car',
      src: '/tedacar-screenshot.png'
    },
    {
      name: 'Start Your Engine Club',
      src: '/startyourengine-screenshot.png'
    },
    {
      name: 'Monfent CMS',
      src: '/monfent-cms-screenshot.png'
    },
    {
      name: 'MF Digital Consult',
      src: '/mayfantasy-screenshot.png'
    }
  ]

  return (
    <>
      <style jsx>{`
        .works {
          .works__item {
            &:hover {
              z-index: 1;
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
        {items.map((item) => (
          <div
            key={item.name}
            className="w-1/4 works__item transition-all duration-300 ease-in-out cursor-pointer overflow-hidden text-center p-1 bg-black"
          >
            <div className="relative">
              <img
                src={item.src}
                className="w-full  duration-300 ease-in-out cursor-pointer"
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
