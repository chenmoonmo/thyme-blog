import Header from './Header'

const Layout = (props) => {
  const { children } = props
  return <div>
    <Header></Header>
    {children}
  </div>
}

export default Layout