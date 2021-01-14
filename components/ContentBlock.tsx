import Image from 'next/image'
interface IProps {
  src: string
  alt: string
  content: React.ReactNode
  right?: boolean
}

const ContentBlock = (props: IProps) => {
  const { src, content, right, alt } = props
  return (
    <div className="flex flex-col lg:flex-row items-center py-16">
      <div
        className={`lg:w-1/2 ${right ? 'lg:pl-10' : ''} ${
          right ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <Image
          width={900}
          height={480}
          src={src}
          alt={alt}
          className="w-full"
        />
      </div>
      <div
        className={`flex-1  ${!right ? 'lg:pl-10' : ''} ${
          right ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        {content}
      </div>
    </div>
  )
}

export default ContentBlock
