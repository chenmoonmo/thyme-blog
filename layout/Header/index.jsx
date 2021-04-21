import Image from 'next/image'
const Navs = () => {
  const navs = [
    { name: 'Home', path: 'home' },
    { name: 'Labels', path: 'labels' },
    { name: 'About', path: 'about' }
  ]
  return (<div className="flex flex-row">
    {navs.map(itme => <div className="font-bold text-xl pr-3 cursor-pointer hover:text-green-600">{itme.name}</div>)}
  </div>)
}
const Header = () => {
  return (<div className="py-5 px-10 flex flex-row items-center justify-between">
    <div className="cursor-pointer animate-bounce">
      <Image src='/pokemon.png' height="30px" width="30" ></Image>
    </div>
    <Navs></Navs>
  </div>)
}

export default Header