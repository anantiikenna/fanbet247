// server.action.ts
import { API_URLS } from "../api/apiUrls";
import { parseStringify } from "../utils";

// Fetch upcoming fixtures from the API
export const fetchUpcomingFixtures = async (): Promise<Fixture[]> => {
    const response = await fetch(API_URLS.FETCH_UPCOMING_FIXTURES);
    if (!response.ok) {
        const errorMessage = await response.text(); // Capture the error message from the response
        throw new Error(`Failed to fetch upcoming fixtures: ${errorMessage}`);

        
    }
    const data = await response.json;
    return parseStringify(data); // Return data directly after parsing
};

// Fetch single fixture details from the API
export const fetchSingleFixtureDetails = async (fixture_id: number): Promise<Fixture> => {
    const response = await fetch(API_URLS.FETCH_SINGLE_FIXTURE_DETAILS(fixture_id));
    if (!response.ok) {
        const errorMessage = await response.text(); // Capture the error message from the response
        throw new Error(`Failed to fetch fixture details for ID ${fixture_id}: ${errorMessage}`);
    }
    const data = await response.json;
    return parseStringify(data); // Return data directly after parsing
};
