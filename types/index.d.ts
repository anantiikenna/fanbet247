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

interface VerificationFormValues {
    documentType: string;
    uploadedDocument: CustomFile | null;
    password: string;
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

type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>;

interface WithdrawFormValues {
    repeatWithDifferentAmount: boolean;
    amount: string;
    bank: string;
    accountNumber: string;
    recipientName: string;
    password: string;
}

// Type for transaction types, restricting values to 'credit' or 'debit'
type TransactionType = 'credit' | 'debit';

// Interface for the form data
interface TransactionFormValues {
    transactionType: TransactionType;  // Ensures the transaction type is either 'credit' or 'debit'
    dateRange: { from: Date; to: Date };  // Defines the date range for the transaction
}

// Interface for the transaction data
interface Transaction {
    refId: string;  // Reference ID for each transaction
    transactionDate: string;  // Date of the transaction
    type: TransactionType;  // Transaction type, either 'credit' or 'debit'
    amount: string;  // Transaction amount, formatted as a string (e.g., "$100.00")
    balance: string;  // Account balance, formatted as a string (e.g., "$1000.00")
    status: 'Pending'
}

interface TransactionFormValues {
    transactionType: string;
    dateRange: { from: Date; to: Date };
}

interface DatePickerWithRangeProps {
    className?: string;
    onDateChange: (dateRange: DateRange) => void;
}

type DepositFormValues = {
    amount: string;
    bank: string;
    accountNumber: string;
    notes?: string;
  };

interface BetHistoryFormValues {
    betStatus: "openbets" | "settledbets";
    betType: "single" | "multiple" | "system";
    dateRange: {
      from: Date;
      to: Date;
    };
    fixture:string;
}

interface Bet {
    refId: string;
    betDate: string;
    betType: string;
    stake: string;
    fixture: string;
    status: "Pending" | "Won" | "Lost";
}
