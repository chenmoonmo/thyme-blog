import Labels from './Labels'
const SliderLabels = (props) => {
  const { labelsArr } = props
  return (
    <div className="col-start-9 col-span-4">
      <h4 className="font-bold mb-2">文章标签</h4>
      <Labels labelArr={labelsArr}></Labels>
    </div>
  )

}

export default SliderLabels