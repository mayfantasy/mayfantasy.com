interface IProps {
  src: string
  alt: string
  content: React.ReactNode
  right?: boolean
}

const ContentBlock = (props: IProps) => {
  const { src, content, right, alt } = props
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className={`flex-1 ${right ? 'lg:order-2' : 'lg:order-1'}`}>
        <img loading="lazy" src={src} alt={alt} className="w-full" />
      </div>
      <div className={`flex-1 ${right ? 'lg:order-1' : 'lg:order-2'}`}>
        {content}
      </div>
    </div>
  )
}

export default ContentBlock
