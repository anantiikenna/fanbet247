import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { formatMatchTime } from "@/lib/utils";

interface TodayFixturesProps {
  fixtures: Fixture[];
}

const TodayFixtures: React.FC<TodayFixturesProps> = ({ fixtures }) => {
  const today = new Date().toDateString();

  // Filter fixtures to show only today's matches
  const todayFixtures = fixtures.filter(
    (fixture) => new Date(fixture.date).toDateString() === today
  );

  if (todayFixtures.length === 0) {
    return <p>No matches scheduled for today.</p>;
  }

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold mb-4">Today’s Fixtures</h3>
      <ul className="space-y-4">
        {todayFixtures.map((match) => (
          <li
            key={match.fixture_id}
            className="p-4 border rounded-lg shadow-md flex justify-between items-center"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={match.home_team.logo}
                alt={match.home_team.name}
                width={50}
                height={50}
              />
              <span className="font-bold">{match.home_team.name}</span>
              <span>vs</span>
              <span className="font-bold">{match.away_team.name}</span>
              <Image
                src={match.away_team.logo}
                alt={match.away_team.name}
                width={50}
                height={50}
              />
            </div>
            <p>{formatMatchTime(match.date)}</p>
            <Link href={`/sport/${match.fixture_id}`}>
              <Button variant="default">Place Bet</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayFixtures;
