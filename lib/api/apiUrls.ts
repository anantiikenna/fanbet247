export const API_URLS = {
    FETCH_UPCOMING_FIXTURES: 'https://backend.fanbet247.online/api/sports/upcoming-fixtures/?format=json',
    FETCH_SINGLE_FIXTURE_DETAILS: (fixture_id: number) => `https://backend.fanbet247.online/api/sports/fixture/${fixture_id}/?format=json`,
};

