// lib/fetchWithCache.ts

const cache: Map<string, CacheEntry> = new Map();
const cacheArray: Map<string, CacheEntryArray> = new Map();

function calculateExpiryTime(fixtures: Fixture[], defaultCacheTime: number): number {
    const now = Date.now();
    const todayDate = new Date().setHours(0, 0, 0, 0);

    const todayFixtures = fixtures.filter(fixture => {
        const fixtureDate = new Date(fixture.date).setHours(0, 0, 0, 0);
        return fixtureDate === todayDate;
    });

    if (todayFixtures.length === 0) {
        return now + defaultCacheTime;
    }

    // Get the first fixture's date of today and use it as expiry
    const firstFixtureDate = new Date(todayFixtures[0].date).getTime();
    return firstFixtureDate > now ? firstFixtureDate : now + defaultCacheTime;
}

// Fetch with caching for a single Fixture
export async function fetchFixtureWithCache(url: string, cacheTime: number = 600000): Promise<Fixture> {
    const cached = cache.get(url);

    if (cached && Date.now() < cached.expiry) {
        return cached.data as Fixture;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture = await response.json();
        const expiryTime = calculateExpiryTime([data], cacheTime);
        cache.set(url, { data, expiry: expiryTime });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// Fetch with caching for an array of Fixtures
export async function fetchFixturesWithCache(url: string, cacheTime: number = 600000): Promise<Fixture[]> {
    const cachedArray = cacheArray.get(url);

    if (cachedArray && Date.now() < cachedArray.expiry) {
        return cachedArray.data as Fixture[];
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture[] = await response.json();
        const expiryTime = calculateExpiryTime(data, cacheTime);
        cacheArray.set(url, { data, expiry: expiryTime });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
