import { Button } from '@/components/ui/button';
import { getSingleFixtureDetails } from '@/lib/queries/user.action';
import Image from 'next/image';


const BetPage = async ({ params }: BetPageProps) => {
  const { fixture_id } = await params;

  // Fetch the fixture data directly in the component
  const fixture: Fixture | null = await getSingleFixtureDetails(fixture_id).catch((error) => {
    console.error('Error fetching fixture data:', error);
    return null;
  });

  if (!fixture) {
    return <div>Loading...</div>; // Loading state if fixture is null
  }

  return (
    <div className="flex flex-col w-full h-[530px] items-center gap-5 p-10">
      <h2 className="text-3xl font-bold text-center">{fixture.league_name}</h2>
      <p className="text-lg">{new Date(fixture.date).toLocaleString()}</p>

      <div className="flex items-center gap-10">
        <div className="text-center">
          <Image src={fixture.home_team.logo} alt={fixture.home_team.name} width={100} height={100} />
          <h3 className="text-xl font-semibold">{fixture.home_team.name}</h3>
        </div>
        <span className="text-2xl font-bold">VS</span>
        <div className="text-center">
          <Image src={fixture.away_team.logo} alt={fixture.away_team.name} width={100} height={100} />
          <h3 className="text-xl font-semibold">{fixture.away_team.name}</h3>
        </div>
      </div>

      <Button className="text-white font-semibold bg-no-repeat mt-5 py-2 px-4 w-100 bg-center" style={{ backgroundImage: "url(/assets/images/ButtonImage.png)" }}>
        Place Your Bet
      </Button>
    </div>
  );
};

export default BetPage;
