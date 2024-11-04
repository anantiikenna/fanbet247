// UpcomingMatch.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatDateMMDDWithDay, formatMatchTime } from '@/lib/utils';
import { useUpcomingFixtures } from "@/lib/queries/user.action.";


const UpcomingMatch: React.FC = () => {
  // Use TanStack Query's useUpcomingFixtures to fetch data
  const { data: fixtures = [], isLoading, isError } = useUpcomingFixtures();

  // Loading and error handling
  if (isLoading) return <p>Loading upcoming matches...</p>;
  if (isError) return <p>Error loading matches. Please try again later.</p>;

  // Group fixtures by the date for display
  const groupedFixtures = fixtures.reduce((groups, fixture) => {
    const date = formatDateMMDDWithDay(fixture.date);
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(fixture);
    return groups;
  }, {} as Record<string, Fixture[]>);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {Object.entries(groupedFixtures).map(([date, matches]) => (
        <div key={date}>
          <h3 className="text-xl font-semibold mb-4">{date}</h3>
          <ul className="space-y-4">
            {matches.map((match) => (
              <li key={match.fixture_id} className="p-4 border rounded-lg shadow-md flex justify-between items-center">
                <div className="flex flex-col items-center gap-4">
                  <div className='flex w-full gap-4'>
                    <Image src={match.home_team.logo} alt={match.home_team.name} width={20} height={20} />
                    <span className="font-bold">{match.home_team.name}</span>
                  </div>
                  
                  <div className="flex w-full gap-4">
                    <Image src={match.away_team.logo} alt={match.away_team.name} width={20} height={20} />
                    <span className="font-bold">{match.away_team.name}</span>
                  </div>
                </div>
                <Link href={`/sport/${match.fixture_id}`}>
                  <Button variant="default">Place Bet</Button>
                </Link>
                <p>{formatMatchTime(match.date)}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UpcomingMatch;
