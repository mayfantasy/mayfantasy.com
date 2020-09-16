interface IProps {
  children: React.ReactNode | string
  right?: boolean
}

const Title = (props: IProps) => {
  const { children, right } = props
  return (
    <>
      <h2 className={`text-5xl ${right ? 'flex justify-end' : ''}`}>
        <div>
          <div>
            <strong>{children}</strong>
          </div>
          <div
            className="bg-purple-300"
            style={{
              width: '250px',
              height: '35px',
              marginTop: -40
            }}
          />
        </div>
      </h2>
    </>
  )
}

export default Title
