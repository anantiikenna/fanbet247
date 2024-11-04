// lib/fetchWithCache.ts

const cache: CacheMap = new Map<string, CacheEntry>();
const cacheArray: CacheMapArray = new Map<string, CacheEntryArray>();

// Fetch with caching for a single Fixture
export async function fetchFixtureWithCache(url: string, cacheTime: number = 600000): Promise<Fixture> {
    const cached = cache.get(url);

    if (cached && Date.now() < cached.expiry) {
        return cached.data as Fixture; // Return cached data as Fixture
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture = await response.json(); // Expecting data to be of type Fixture
        cache.set(url, { data, expiry: Date.now() + cacheTime });
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
        return cachedArray.data as Fixture[]; // Return cached data as Fixture[]
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture[] = await response.json(); // Expecting data to be of type Fixture[]
        cacheArray.set(url, { data, expiry: Date.now() + cacheTime });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
