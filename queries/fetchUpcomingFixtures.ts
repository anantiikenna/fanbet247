// lib/fetchUpcomingFixtures.ts
export const fetchUpcomingFixtures = async () => {
    const response = await fetch('https://backend.fanbet247.online/api/sports/upcoming-fixtures/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // You may need to add an API key or other headers if required
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch upcoming fixtures');
    }

    const data = await response.json();
    return data;
};
