// types/index.ts

 interface League {
    league_id: number;
    name: string;
    league_type: string;
    logo: string;
    fav: boolean;
}

 interface Team {
    id: number;
    team_id: number;
    name: string;
    logo: string;
}

 interface Fixture {
    fixture_id: number;
    date: string;
    league: League;
    home_team: Team;
    away_team: Team;
}

interface Team {
    logo: string;
    name: string;
  }
  
  interface Fixture {
    date: string;
    league_name: { name: string };
    home_team: Team;
    away_team: Team;
  }
  
  interface BetPageProps extends PageProps {
    params: Promise<{ fixture_id: number }>;
  }

 interface HomePage {
  fixtures: Fixture[];
  upcomingFixtures: Fixture[];
}

 interface UpcomingMatchProps {
    fixtures: Fixture[];
    matches?: Fixture[]
}

interface FixtureDetailProps {
  param: number;
  fixture?: Fixture; // Adjust this based on the actual structure of the fixture details
}

interface HeroProps {
  fixtures: Fixture[];
}
interface TodayFixturesProps {
  fixtures: Fixture[];
}

interface MiniFixturesProps {
  fixtures: Fixture[];
}

interface BettingFormProps {
  fixture: Fixture;
  onBetPlaced: () => void;
}

interface BetFormProps {
  fixtureId: number;
  leagueName: string;
  homeTeam: { name: string; logo: string };
  awayTeam: { name: string; logo: string };
  odds: number;
}
