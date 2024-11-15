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
    league_name: string;
    fixture_id: number;
    date: string;
    league: League;
    home_team: Team;
    away_team: Team;
}

interface BetPageProps extends PageProps {
    params: Promise<{ fixture_id: number }>;
}

interface CommentsProps {
    fixtureId: number;
}

interface HomePage {
    fixtures: Fixture[];
    upcomingFixtures: Fixture[];
}

interface UpcomingMatchProps {
    fixtures: Fixture[];
    matches?: Fixture[];
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

// Cache entry for storing fetched data
type CacheEntry = {
    data: Fixture; // This will now correctly accept both single Fixture and Fixture[]
    expiry: number;    // Expiry timestamp
};

type CacheEntryArray = {
  data: Fixture[]; // This will now correctly accept both single Fixture and Fixture[]
  expiry: number;    // Expiry timestamp
};

// Define the cache Map type
type CacheMap = Map<string, CacheEntry>;

// Define the cache Map type
type CacheMapArray = Map<string, CacheEntryArray>;

type LoginFormValues = z.infer<typeof loginSchema>;

type SignupFormValues = z.infer<typeof signupSchema>;

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

type PasswordResetFormValues = z.infer<typeof passwordResetSchema>;

type players = Map<player[]>;

interface player {
  rank: number;
  username: string;
  gameplayed: number;
  points: number;
}

interface UploadedImageProps {
  name: string;
  url?: string;
  type?: string;
  // Optional fields for flexibility
  size?: number;
  lastModified?: number; 
}

interface CustomFile extends Blob {
    name: string;
    type: string;
    size: number;
    lastModified: number;
    // Add any additional properties or methods you need for your custom logic
  }
  
interface ProfileFormValues {
    firstName: string;
    surname: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    country: string;
    profileImage?: UploadedImageProps | string; // Represents either an uploaded image object or a string
  }
  
type ProfileFormValues = z.infer<typeof profileFormSchema>;


type BreadcrumbLinkType = {
    label: string;
    route: string;
  };
  
  // Define the props type for the Breadcrumbs component
interface BreadcrumbsProps {
    links: BreadcrumbLinkType[];
}