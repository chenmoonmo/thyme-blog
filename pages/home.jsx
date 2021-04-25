import Layout from '../layout'
import AList from '../components/AList'
import SliderLabels from '../components/SliderLabels'
import Banner from '../components/Banner'
import { useState } from 'react'

const home = (props) => {
  console.log(props)
  const { labelsArr } = props
  const [articles, setArticles] = useState(props.initArticles)
  return (<Layout>
    <Banner></Banner>
    <AList articles={articles} ></AList>
    <SliderLabels labelsArr={labelsArr}></SliderLabels>
  </Layout>)
}

export async function getServerSideProps(context) {
  console.log(context);
  const initArticles = [
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },
    { title: '7 things people who are good with money never buy', content: 'People who are good with money look for quality over quantity, and don’t make purchases that will derail their money goals later.', date: '1619353312524' },]
  const labelsArr = [
    { name: 'JS' },
    { name: 'CSS' },
    { name: 'React' }
  ]
  return {
    props: {
      initArticles,
      labelsArr
    }
  }
}

export default home