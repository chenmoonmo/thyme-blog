import Image from 'next/image'
import Link from 'next/link'
const Navs = () => {
  const navs = [
    { name: 'Home', path: '/home' },
    { name: 'Labels', path: '/labels' },
    { name: 'About', path: '/about' }
  ]
  return (<div className="flex flex-row items-center">
    {navs.map((item, index) => <div key={index} className="font-bold text-xl pr-3 cursor-pointer select-none hover:text-green-600"><Link href={item.path}>{item.name}</Link>
    </div>)}
    <div className="bg-green-600 text-white font-bold text-xl px-4 py-1 rounded-full hover:bg-green-700 cursor-pointer">Manage</div>
  </div>)
}
const Header = () => {
  return (<div className="sticky bg-white shadow-sm top-0 py-5 px-10 flex flex-row items-center justify-between">
    <div className="cursor-pointer animate-bounce flex flex-row items-center">
      <Image src='/pokemon.png' height="30px" width="30" ></Image>
      <span className="font-bold text-3xl pl-3">Thyme Blog</span>
    </div>
    <Navs></Navs>
  </div>)
}

export default Header