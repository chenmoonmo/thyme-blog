const Label = (props) => {
  const { labelInfo: { name } } = props
  return <div className="py-1 px-4 mx-1 border rounded-sm cursor-pointer 
  text-xs text-gray-500 hover:text-green-500 hover:border-gray-300
  mb-3">{name}</div>
}

export default Label