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
// Example of Fixture type in types/index.ts
interface Fixtured {
  id: number;
  date: string; // Adjust types as necessary
  teams: {
      home: string;
      away: string;
  };
  odds: {
      home: number;
      away: number;
  };
  // Add other properties as necessary
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
  params:{ fixture_id: number };
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


interface BetFormProps {
  fixtureId: number;
  leagueName: string;
  homeTeam: { name: string; logo: string };
  awayTeam: { name: string; logo: string };
  odds: number;
}

