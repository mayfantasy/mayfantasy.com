interface IProps {
  src: string
  content: React.ReactNode
  right?: boolean
}

const ContentBlock = (props: IProps) => {
  const { src, content, right } = props
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className={`flex-1 ${right ? 'lg:order-2' : 'lg:order-1'}`}>
        <img src={src} className="w-full" />
      </div>
      <div className={`flex-1 ${right ? 'lg:order-1' : 'lg:order-2'}`}>
        {content}
      </div>
    </div>
  )
}

export default ContentBlock
