import { trendlingLinks } from "@/constant";
import Image from "next/image";
import { Button } from "../ui/button";
import TodayFixtures from "../TodayFixtures";
// import UpcomingMatch from "../UpcomingMatch";

const Hero: React.FC<HeroProps> = ({ fixtures }) => {
  return (
    <section className="w-full">
      <div className='w-full flex gap-0 md:gap-2 lg:gap-7 md:px-5 xl:px-20'>
        <div className="hidden w-[30%] lg:flex flex-col gap-5 bg-[#2a5e37] md:px-5 md:py-5 text-white">
          <h3 className="text-lg font-bold">Trending</h3>
          <ul className="hidden w-full md:flex flex-col items-baseline gap-5">
            {trendlingLinks.map((item) =>(
              <li key={item.label} className='flex gap-2'>
                <Image src={item.imgUrl} alt={item.label} width={20} height={20} />
                <p className="text-sm md:text-base text-bold">{item.label}</p>
              </li>
            )
          )}
            <br/><br/><br/><br/><br/><br/><br/><br/>
          </ul>
        </div>
        <div className="flex flex-col w-full pt-[5px]]">
          <div className="flex flex-col items-center justify-center w-full  bg-[url(/images/herobg.svg)] gap-1 md:gap-5 bg-no-repeat bg-cover bg-center px-5 py-10 md:px-24 text-center text-white">
            <h4 className='text-base'>Bet & Win Today</h4>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl md:py-2">Peer-to-Peer</h1>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl md:py-2">Betting Platform</h1>
            <div className="flex w-full px-2 py-0 my-2 md:my-0 md:py-0 bg-transparent border border-gray-300 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white">
              <Button className=" bg-transparent">
                <Image src={'/icons/search.svg'} alt="search" width={25} height={25} />
              </Button>
              <input
                type="text"
                placeholder="Enter Reference Number"
                className="w-full bg-transparent text-white placeholder-white focus:outline-none focus:border-white"
              />
            </div>
            <div className="flex md:flex-col justify-center md:gap-2 text-center">
              <p className="text-sm md:text-lg">Experience the fastest, easiest way to bet on your favourite sports and league.<span className="font-bold md:hidden">Choose your team and challenge your friends to win big.</span></p>
              <p className="hidden md:flex font-bold">Choose your team and challenge your friends to win big.</p>
            </div>
          </div>
          {/* <UpcomingMatch fixtures={fixtures}/> */}
          <TodayFixtures fixtures={fixtures}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
