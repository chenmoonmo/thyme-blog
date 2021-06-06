import Layout from '../../layout'
import { useRouter } from 'next/router'

const label = (props) => {
  const router = useRouter()
  console.log(router)
  return (<Layout>{router.query.id}</Layout>)
}

export default label