import Layout from '../layout'
const home = () => {
  const content = <div className='text-yellow-400 animate-pulse'>你好 世界</div>
  return (<Layout>
    {content}
  </Layout>)
}

export default home