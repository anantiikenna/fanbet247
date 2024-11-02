import { fetchSingleFixtureDetails, fetchUpcomingFixtures } from './server.action';

// Function to get single fixture details by fixture ID
export const getSingleFixtureDetails = async (fixture_id: number): Promise<Fixture> => {
        const fixtureDetails = await fetchSingleFixtureDetails(fixture_id);
        return fixtureDetails; // Return the details of the single fixture
    
};

// Function to get all upcoming fixtures for a user
export const getUpcomingFixturesForUser = async (): Promise<Fixture[]> => {
    // You can call the fetch function from server.action.ts or handle differently
    // This is just an example; you can replace it with actual logic
    const fixtures = await fetchUpcomingFixtures(); // Assume you want upcoming fixtures
    return fixtures; // Return the upcoming fixtures for user
};


// Function to generate static parameters for dynamic routes
export const generateStaticParams = async () => {
    const fixtureIds = [1, 2, 3]; // Placeholder for actual fixture IDs, replace with your logic to fetch actual IDs
    return fixtureIds.map(id => ({ fixtureid: id })); // Fixture ID is now a number
  };
  
export const getStaticProps = async (context: { params: { fixtureid: number } }) => {
    const { fixtureid } = context.params;
    try {
      const fixture = await getSingleFixtureDetails(fixtureid); // Fetch fixture details from user action
      return { props: { fixture } };
    } catch (error) {
      console.error(error);
      return { props: { fixture: null } }; // Return null or some error state
    }
  };

export const getStaticPaths = async () => {
    // You can fetch the IDs of fixtures here if you want to pre-render them
    return {
        paths: [], // Add paths based on your available fixtures
        fallback: 'blocking',
    };
};
