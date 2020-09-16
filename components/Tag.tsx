interface IProps {
  children: React.ReactNode
}

const Tag = (props: IProps) => {
  return (
    <span className="inline-block py-1 px-2 mr-1 mb-1 bg-purple-200">
      {props.children}
    </span>
  )
}

export default Tag
