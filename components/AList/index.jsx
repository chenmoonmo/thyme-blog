import Articles from './Articles'

const AList = (props) => {
  return <div className="col-start-1 col-end-7">{
    props.articles.map((item, index) => <Articles article={item} key={index}></Articles>)
  }</div>
}

export default AList