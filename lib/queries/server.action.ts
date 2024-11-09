import { API_URLS } from "../api/apiUrls";
import { fetchFixturesWithCache, fetchFixtureWithCache } from "../fetchWithCache";

const url = API_URLS.FETCH_UPCOMING_FIXTURES ?? "default-fallback-url";
// Fetch upcoming fixtures with caching
export const fetchUpcomingFixtures = async (): Promise<Fixture[]> => {
    return await fetchFixturesWithCache(url);
};

// Fetch single fixture details with caching
export const fetchSingleFixtureDetails = async (fixture_id: number): Promise<Fixture> => {
    return await fetchFixtureWithCache(API_URLS.FETCH_SINGLE_FIXTURE_DETAILS(fixture_id));
};
