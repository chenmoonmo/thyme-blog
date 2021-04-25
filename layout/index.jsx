import Header from './Header'

const Layout = (props) => {
  const { children } = props
  return <div>
    <Header className="col-start-1 col-end-6"></Header>
    <div className="px-10 block md:grid md:grid-cols-12">
      {children}
    </div>
  </div>
}

export default Layout