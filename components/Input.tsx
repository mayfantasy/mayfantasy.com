interface IProps {
  value: string
  onChange: (value: string) => void
  id: string
  label: string
  placeholder: string
  isTextarea?: boolean
}
const Input = (props: IProps) => {
  const { value, onChange, id, label, placeholder, isTextarea } = props
  return (
    <div className="mb-4">
      <div className="mb-1">
        <label className="text-2xl text-gray-600" htmlFor={id}>
          {label}
        </label>
      </div>
      <div>
        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            className="w-full h-32 border-b-2 border-purple-700 outline-none"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <input
            placeholder={placeholder}
            className="w-full h-8 border-b-2 border-purple-700 outline-none"
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </div>
    </div>
  )
}

export default Input
