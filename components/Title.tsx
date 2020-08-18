interface IProps {
  children: React.ReactNode | string
  right?: boolean
}

const Title = (props: IProps) => {
  const { children, right } = props
  return (
    <h1 className={`text-5xl ${right ? 'flex justify-end' : ''}`}>
      <span className="border-b-8 border-purple-700">{children}</span>
    </h1>
  )
}

export default Title
