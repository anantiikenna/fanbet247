import { API_URLS } from "../api/apiUrls";

// Fetch upcoming fixtures from the API
export const fetchUpcomingFixtures = async () => {
    const response = await fetch(API_URLS.FETCH_UPCOMING_FIXTURES);
    if (!response.ok) {
        throw new Error('Failed to fetch upcoming fixtures');
    }
    const data = await response.json();
    return data;
};

// Fetch single fixture details from the API
export const fetchSingleFixtureDetails = async (fixture_id: number) => {
    const response = await fetch(API_URLS.FETCH_SINGLE_FIXTURE_DETAILS(fixture_id));
    if (!response.ok) {
        throw new Error('Failed to fetch fixture details');
    }
    const data = await response.json();
    return data;
};
