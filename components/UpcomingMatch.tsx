import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatMatchTime } from '@/lib/utils';

const UpcomingMatch: React.FC<UpcomingMatchProps> = ({ fixtures }) => {
  // Group fixtures by the date for display
  const groupedFixtures = fixtures.reduce((groups, fixture) => {
    const date = new Date(fixture.date).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(fixture);
    return groups;
  }, {} as Record<string, Fixture[]>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedFixtures).map(([date, matches]) => (
        <div key={date}>
          <h3 className="text-xl font-semibold mb-4">{date}</h3>
          <ul className="space-y-4">
            {matches.map((match) => (
              <li key={match.fixture_id} className="p-4 border rounded-lg shadow-md flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <Image src={match.home_team.logo} alt={match.home_team.name} width={100} height={100} />
                  <span className="font-bold">{match.home_team.name}</span>
                  <span>vs</span>
                  <span className="font-bold">{match.away_team.name}</span>
                  <Image src={match.away_team.logo} alt={match.away_team.name} width={100} height={100} />
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
