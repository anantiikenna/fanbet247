import Hero from "@/components/sections/Hero";
import UpcomingMatch from "@/components/UpcomingMatch";
import { getUpcomingFixturesForUser } from "@/lib/queries/user.action.";

const HomePage: React.FC<HomePageProps> = async () => {
  const fixtures = await getUpcomingFixturesForUser();

  return (
    <div>
      <Hero/>
      
      <div className="container mx-auto py-14 px-28">
      <h1 className="text-3xl font-bold mb-6">Welcome to FanBet247</h1>
      <h2 className="text-2xl font-semibold mb-4">Upcoming Matches</h2>

      <UpcomingMatch fixtures={fixtures} />
    </div>
    </div>
  );
};

export default HomePage;
