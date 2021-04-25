import Image from 'next/image'
const Banner = () => {
  // <Image src='/posefx.jpg' height="200" width={1000} ></Image>

  return (<div className="col-span-full overflow-hidden relative h-80 mb-5">
    <img src={`/posefx.jpg`} className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
  </div>)
}
export default Banner