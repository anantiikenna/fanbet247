import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { players } from '@/constants'
import Image from 'next/image'


const League247 = () => {
  return (
    <div>
      <div className='bg-white flex flex-col md:p-5'>
        <div className='flex justify-between items-center p-2 md:p-4 bg-[#085D37]'>
          <h1 className='text-white font-extrabold'>247 League</h1>
        </div>
        <p className='text-sm p-2'>
          View your position on the leaderboard to know how you&apos;re doing in the league.
        </p>
        <Table>
          <TableCaption>A list of top players.</TableCaption>
          <TableHeader>
            <TableRow className='text-xs md:text-lg '>
              <TableHead className="md:w-[50px] text-[#550055]">Rank</TableHead>
              <TableHead className="md:w-[50px] text-[#550055]">&nbsp;</TableHead>
              <TableHead className='text-[#550055]'>Username</TableHead >
              <TableHead className="text-right text-[#550055]">Gameplayed</TableHead>
              <TableHead className="text-right text-[#550055]">Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {players.map((player: player) => (
              <TableRow key={player.rank} className='text-xs md:text-lg' >
                <TableCell 
                  className={
                    player.rank <= 4 ? 'bg-[url(/assets/icons/rank1.svg)] bg-no-repeat bg-bottom text-center':
                    player.rank == 5 ? 'bg-[url(/assets/icons/rank2.svg)] bg-no-repeat bg-bottom text-center':
                    "text-center"
                  }
                >
                  {player.rank}
                </TableCell>
                <TableCell><Image src='/assets/icons/badge.svg' alt='badge' width={20} height={20} /></TableCell>
                <TableCell>{player.username}</TableCell>
                <TableCell className="text-right">{player.gameplayed}</TableCell>
                <TableCell className="text-right">{player.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default League247;