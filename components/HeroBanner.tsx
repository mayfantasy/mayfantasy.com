import ContactLine from './ContactLine'
import ShapesParticles from './Particles/ShapesParticles'

interface IProps {
  title: string
  tagline?: string
  includeContact?: boolean
  src: string
  alt: string
}
const HeroBanner = (props: IProps) => {
  const { title, tagline, includeContact, src, alt } = props
  return (
    <section className="relative py-10 z-0">
      <div className="w-full h-full top-0 left-0 absolute overflow-hidden z--1">
        <ShapesParticles />
      </div>

      <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center py-4 z-10">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
          {tagline && <p className="text-gray-600 mb-4">{tagline}</p>}
          {includeContact && <ContactLine />}
        </div>
        <div className="w-full lg:w-2/3">
          <img src={src} alt={alt} className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
