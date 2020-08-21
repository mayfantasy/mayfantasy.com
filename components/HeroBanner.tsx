import ContactLine from './ContactLine'

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
    <section className="flex flex-col lg:flex-row items-center py-4">
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
        {tagline && <p className="text-gray-600 mb-4">{tagline}</p>}
        {includeContact && <ContactLine />}
      </div>
      <div className="flex-1">
        <img src={src} alt={alt} className="w-full" />
      </div>
    </section>
  )
}

export default HeroBanner
