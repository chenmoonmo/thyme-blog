import Header from './Header'

const Layout = (props) => {
  const { children } = props
  return <div className="md:container md:mx-auto h-screen">
    <Header className="col-start-1 col-end-6 "></Header>
    <div className="px-10 block md:grid md:grid-cols-12 h-full">
      {children}
    </div>
  </div>
}

export default Layout