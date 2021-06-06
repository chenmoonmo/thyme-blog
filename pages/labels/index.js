import Layout from '../../layout'

const label = (props) => {
  console.log(props)
  const labels = ['js', 'css', 'react']
  return (<Layout>
    <div className="col-span-full h-20 md:col-span-4 md:h-full bg-gray-400"></div>
  </Layout>)
}

export default label