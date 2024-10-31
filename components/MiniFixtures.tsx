import Image from "next/image"
import { Button } from "./ui/button"

const MiniFixtures: React.FC<MiniFixturesProps> = ({fixtures}) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  h-[50%] overflow-hidden gap-4">
      {fixtures.map((result: Fixture) => (
        <div key={result.fixture_id} className="flex flex-col border rounded-xl bg-white pb-4 shadow-md">
            <div className="rounded-t-xl px-4 py-2 bg-white flex border border-b-2 justify-center items-center">
                <h2 className="text-lg font-bold">{result.league.name}</h2>
            </div>
            <div className="flex justify-between items-center gap-2 px-1 py-5">
                <div className="flex flex-col items-center gap-5 w-[50%]">
                    <h3 className="font-bold text-center text-[#475467] text-sm mb-2">{result.home_team.name}</h3>
                    <Image src={result.home_team.logo} alt={result.home_team.name} width={20} height={20} className="w-10 h-10" />
                </div>
                <div>v</div>
                <div className="flex flex-col items-center gap-5 w-[50%]">
                    <h3 className="font-bold text-[#475467] text-sm mb-2">{result.away_team.name}</h3>
                    <Image src={result.away_team.logo} alt={result.away_team.name} width={20} height={20} className="w-10 h-10" />
                </div>
            </div>
            <div className="self-center">
                <Button className="bg-[#DAC100] text-black font-bold italic bg-center px-5 py-2 w-100">Bet Now</Button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default MiniFixtures;
