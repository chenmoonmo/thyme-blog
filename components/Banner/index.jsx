import Image from 'next/image'
const Banner = () => {
  // <Image src='/posefx.jpg' height="200" width={1000} ></Image>

  return (<div className="col-span-full overflow-hidden">
    <img src={`/posefx.jpg`} className="w-full"></img>
  </div>)
}
export default Banner