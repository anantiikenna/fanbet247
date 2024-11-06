import MiniFixtures from "@/components/MiniFixtures";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { getUpcomingFixturesForUser } from "@/lib/queries/user.action";

import Image from "next/image";

const Home = async () => {
  const fixtures = await getUpcomingFixturesForUser();

  return (
    <div className="p-0 m-0 w-full">
      <Hero fixtures={fixtures}/>
      
      <div className="flex flex-col gap-5 w-full px-4 md:px-10 py-5 xl:py-14 xl:px-28">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-7xl text-[#05503E] font-bold md:mb-4">FanBet247</h1>
          <h1 className="text-3xl md:text-7xl text-[#05503E] font-bold md:mb-4"> Amazing Features</h1>
        </div>
      
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-3xl  text-[#05503E] font-semibold mb-4">Peer Challenge Matches</h2>
          <p className="text-lg text-[#05503E]">
           The purest form of peer-to-peer betting. One player opens the bet and defines the odds and another player matches the bet. No bookmakers. No middleman!
          </p>
          <MiniFixtures fixtures={fixtures} />
        </div>
        <div>
          <h1 className="text-3xl text-[#05503E] font-bold mb-6">FanBet League</h1>
          <p>
            Check your rank among peers. Opt-in players are placed in tiered leagues based on their stake amounts. Points are earned from completed challenges, and top-ranking players at the end of each league period win exciting prizes.
          </p>
        </div>
        <div>
          <h1 className="text-3xl text-[#05503E] font-bold">Fan Blog</h1>
          <p className='text-lg text-[#05503E]'>
            Dive into previews and post-match reactions for your favorite team. Stay updated with exclusive news, shows, and interviews from FanBet247. Share your opinions and interact with fellow fans
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4 w-full">
              <Image src="/assets/images/football.svg" alt='football' width={50} height={50} className="w-full"/>
              <p className="text-[#05503E] font-bold">Lorem ipsum dolor sit amet consectetur. Urna amet sit leo urna.</p>
              <p className='text-[#626273]'>Lorem ipsum dolor sit amet consectetur. Nulla sit aliquet fermentum massa aenean lectus nibh. Arcu tortor a vitae tincidunt.</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Image src="/assets/images/football.svg" alt='football' width={50} height={50} className="w-full"/>
              <p className="text-[#05503E] font-bold">Lorem ipsum dolor sit amet consectetur. Urna amet sit leo urna.</p>
              <p className='text-[#626273]'>Lorem ipsum dolor sit amet consectetur. Nulla sit aliquet fermentum massa aenean lectus nibh. Arcu tortor a vitae tincidunt.</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Image src="/assets/images/football.svg" alt='football' width={50} height={50} className="w-full"/>
              <p className="text-[#05503E] font-bold">Lorem ipsum dolor sit amet consectetur. Urna amet sit leo urna.</p>
              <p className='text-[#626273]'>Lorem ipsum dolor sit amet consectetur. Nulla sit aliquet fermentum massa aenean lectus nibh. Arcu tortor a vitae tincidunt.</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Image src="/assets/images/football.svg" alt='football' width={50} height={50} className="w-full"/>
              <p className="text-[#05503E] font-bold">Lorem ipsum dolor sit amet consectetur. Urna amet sit leo urna.</p>
              <p className='text-[#626273]'>Lorem ipsum dolor sit amet consectetur. Nulla sit aliquet fermentum massa aenean lectus nibh. Arcu tortor a vitae tincidunt.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row justify-between items-center mb-6">
          <h2 className="text-4xl md:text-5xl lg:text-7xl  text-[#05503E] font-semibold mb-4 w-full">Partner with <br/> FanBet247</h2>
          <div className="flex flex-col">                                                                                                                                                                                                                                                               
            <h3 className="text-xl text-[#05503E] font-bold mb-6">Partner with FanBet247</h3>
            <p className="text-lg text-[#05503E]">
              Are you an experienced sports betting agent, and would like to set up your own franchise? We are happy to get to know your offer. Partner with us and earn as your clients start playing!
            </p>
            <Button className='bg-[#DAC100] mt-3 w-9 text-black font-bold px-9'>More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
