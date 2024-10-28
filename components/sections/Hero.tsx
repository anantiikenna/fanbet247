import { trendlingLinks } from "@/constant";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section>
      <div className='w-full flex px-28 py-10'>
        <div className="w-[25%] flex flex-col gap-5 bg-[#2a5e37] px-10 py-5 text-white">
          <h3 className="text-bold">Trending</h3>
          <div className="flex flex-col gap-5">
            {trendlingLinks.map((item) =>(
              <li key={item.label} className='flex gap-2'>
                <Image src={item.imgUrl} alt={item.label} width={10} height={10} />
                <p className="text-sm text-bold">{item.label}</p>
              </li>
            )
            )}
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col items-center justify-center w-full bg-[url(/images/herobg.svg)] gap-5 bg-no-repeat bg-contain py-10 px-24 text-white">
            <h4 className='text-lg'>Bet & Win Today</h4>
            <h1 className="font-bold text-7xl py-2">Peer-to-Peer</h1>
            <h1 className="font-bold text-7xl py-2">Betting Platform</h1>
            <div className="flex w-full px-2 py-2 bg-transparent border border-gray-300 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white">
              <Button className=" bg-transparent">
                <Image src={'/icons/search.svg'} alt="search" width={25} height={25} />
              </Button>
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>
            <div className="flex flex-col justify-center gap-2 text-center">
              <p className="">Experience the fastest, easiest way to bet on your favourite sports and league.</p>
              <p className="font-bold">Choose your team and challenge your friends to win big.</p>
            </div>
          </div>
          {/* <MyFormPopover/> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
