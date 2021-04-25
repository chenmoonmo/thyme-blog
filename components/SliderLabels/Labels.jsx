import Label from './Label'
const Labels = (props) => {
  const { labelArr } = props
  return (<div className="flex flex-wrap">
    {labelArr.map((item, index) => <Label key={index} labelInfo={item}>{item}</Label>)}
  </div>)
}
export default Labels