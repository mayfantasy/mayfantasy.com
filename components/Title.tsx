interface IProps {
  children: React.ReactNode | string
  right?: boolean
}

const Title = (props: IProps) => {
  const { children, right } = props
  return (
    <>
      <h2 className={`text-5xl ${right ? 'flex justify-end' : ''}`}>
        <strong className="border-b-8 border-purple-700">{children}</strong>
      </h2>
    </>
  )
}

export default Title
