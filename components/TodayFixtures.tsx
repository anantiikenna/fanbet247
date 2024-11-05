"use client"

import Image from "next/image";
import Link from "next/link";
import { formatDateMMDDWithDay, formatMatchTime } from "@/lib/utils";
import BetForm from "./BetForm";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import { useState } from "react";
import { gameTypes } from "@/constants";


const TodayFixtures: React.FC<TodayFixturesProps> = ({ fixtures }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const renderComponent = () => {
    switch (selected) {
      case 'Gametype1': return <Component1 />;
      case 'GameType2': return <Component2 />;
      case 'GameType3': return <Component3 />;
      case 'GameType4': return <Component4 />;
      case 'GameType5': return <Component5 />;
      default: return <Component1 />;
    }
  }
  const today = new Date().toDateString();
  
  // Filter fixtures to show only today's matches
  const todayFixtures = fixtures.filter((fixture) => new Date(fixture.date).toDateString() === today );

  if (todayFixtures.length === 0) {
    return (
    <div className="w-full flex flex-col px-2 h-[60vh] bg-white ">
      <h3 className="text-xl pl-3 py-4">No matches scheduled for today.</h3>
    </div>);
  }

  return (
    <div className="w-full flex flex-col h-[70vh] bg-white ">
      <h3 className="text-xl pl-3 py-4">Today’s Fixtures</h3>
      <div className="relative bg-[#1D2E28] flex justify-between items-center py-5 overflow-hidden overflow-x-scroll md:overflow-hidden">
        {gameTypes.map((game) => (
          <div
            key={game.label}
            onClick={() => setSelected(game.label)}
            className=" bg-[#1D2E28] cursor-pointer text-center text-white p-2"
          >
            {game.label}
          </div>
        ))}
      </div>
      <ul className="flex flex-col overflow-y-scroll">
      
        {todayFixtures.map((match) => (
          <li key={match.fixture_id} className=" w-full flex flex-col gap-5 mb-5 md:mb-8 ">
            <div className=' w-full text-xs grid grid-flow-col grid-cols-9 md:grid-cols-10 gap-1 border-b border-[#D0D5DD] border-solid bg-[#17392B] text-white px-2'>
              <div className="col-span-4 md:col-span-3 flex items-center gap-[1px] md:gap-1 md:py-2">
                <p className="font-bold">{formatDateMMDDWithDay(match.date)}</p>
                <p className='text-base md:text-lg'>|</p>
                <p className="font-bold">{formatMatchTime(match.date)}</p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="">Odds</p>
              </div>
              <div className="col-span-2 md:col-span-2 flex items-center">
                <p>Time</p>
              </div>
              <div className="col-span-2 md:col-span-2 flex items-center">
                <p>Team</p>
              </div>
              <div className="hidden md:col-span-2 "></div>
            </div>
            <div className='w-full text-xs grid grid-flow-col grid-cols-9 md:grid-cols-10 gap-1 px-2 '>
              <div className="col-span-4 md:col-span-3 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Image src={match.home_team.logo} alt={match.home_team.name} width={20} height={10}/>
                    <span className="font-bold">{match.home_team.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src={match.away_team.logo} alt={match.away_team.name} width={20} height={10}/>
                    <span className="font-bold">{match.away_team.name}</span>
                  </div>
                </div>
              <div className='col-span-1 flex items-center '>
                <p>1.8</p>
              </div>
                {renderComponent()}
              <div className="md:col-span-2 hidden w-full md:flex justify-start gap-2">
                {/* <Link href={`/sport/${match.fixture_id}`} className=" self-center w-full">
                  <Button variant="default" className="bg-[#085D37] text-white font-bold px-10 w-full">Bet</Button>
                </Link> */}
                <BetForm fixtureId={ match.fixture_id} leagueName={match.league.name} homeTeam={match.home_team} awayTeam={match.away_team} odds={1.8}    />
          
                <Link href={`/sport/#`} className=" self-center px-5 border py-3 rounded-lg border-black">
                  <Image src={'/assets/icons/comment.svg'} alt="comment" width={30} height={35} />
                </Link>
              </div>
            </div>
            <div className="w-full flex justify-start md:hidden gap-4 px-2">
              {/* <Link href={`/sport/${match.fixture_id}`} className=" self-center w-full">
                <Button variant="default" className="bg-[#085D37] text-white font-bold px-10 w-full">Bet</Button>
              </Link> */}
              <BetForm fixtureId={ match.fixture_id} leagueName={match.league.name} homeTeam={match.home_team} awayTeam={match.away_team} odds={1.8}    />
              <Link href={`/sport/#`} className=" self-center px-5 border py-3 rounded-lg border-black">
                <Image src={'/assets/icons/comment.svg'} alt="comment" width={25} height={25} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayFixtures;
