import ContactLine from './ContactLine'

interface IProps {
  title: string
  includeContact?: boolean
  src: string
  alt: string
}
const HeroBanner = (props: IProps) => {
  const { title, includeContact, src, alt } = props
  return (
    <section className="flex flex-col lg:flex-row items-center py-4">
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        {includeContact && <ContactLine />}
      </div>
      <div className="flex-1">
        <img loading="lazy" src={src} alt={alt} className="w-full" />
      </div>
    </section>
  )
}

export default HeroBanner
