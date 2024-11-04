// user.action.ts
import { useQuery } from '@tanstack/react-query';
import { fetchSingleFixtureDetails, fetchUpcomingFixtures } from './server.action';

// Query to get single fixture details by fixture ID
export const useSingleFixtureDetails = (fixture_id: number) => {
    const queryResult = useQuery<Fixture, Error>({
        queryKey: ['fixtureDetails', fixture_id],
        queryFn: () => fetchSingleFixtureDetails(fixture_id),
        staleTime: 600000, // 10 minutes
        retry: 1,
    });

    if (queryResult.error) {
        console.error("Error fetching single fixture details:", queryResult.error);
    }

    return queryResult;
};

// Query to get all upcoming fixtures for a user
export const useUpcomingFixtures = () => {
  const queryResult = useQuery<Fixture[], Error>({
      queryKey: ['upcomingFixtures'],
      queryFn: fetchUpcomingFixtures,
      staleTime: 600000, // 10 minutes
      retry: 1,
  });

  if (queryResult.error) {
      console.error("Error fetching upcoming fixtures:", queryResult.error);
  }

  return queryResult;
};