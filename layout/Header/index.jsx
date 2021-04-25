import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'
const Navs = () => {
  const navs = [
    { name: 'Home', path: '/home' },
    { name: 'Labels', path: '/labels' },
    { name: 'About', path: '/about' }
  ]
  const [menuState, setmenuState] = useState(false)
  const menuClass = useMemo(() => menuState ? 'absolute flex flex-col items-cente right-0 top-10 bg-white' : 'hidden md:flex flex-row items-cente', [menuState])
  const test = () => setmenuState(!menuState)
  return (<div className="flex items-center relative">
    <div className={menuClass}>
      {navs.map((item, index) => <div key={index} className="font-bold text-xl pr-3 cursor-pointer select-none hover:text-green-600 "><Link href={item.path}>{item.name}</Link>
      </div>)}
    </div>
    <div className="bg-green-600 text-white font-bold text-m md:text-xl px-4 py-1 rounded-full hover:bg-green-700 cursor-pointer"> <Link href={`/login`}>Manage</Link></div>
    <ul className="w-8 ml-2 cursor-pointer md:hidden" onClick={test}>
      <li className="bg-black h-1 "></li>
      <li className="bg-black h-1 my-1"></li>
      <li className="bg-black h-1 "></li>
    </ul>
  </div >)
}
const Header = () => {
  return (<div className="sticky bg-white shadow-sm top-0 h-16 px-5 md:px-10 flex flex-row items-center justify-between z-50">
    <div className="cursor-pointer animate-bounce flex flex-row items-center">
      <Image src='/pokemon.png' height="30px" width="30" ></Image>
      <span className="font-bold text-xl md:text-3xl pl-3">Thyme Blog</span>
    </div>
    <Navs></Navs>
  </div>)
}

export default Header