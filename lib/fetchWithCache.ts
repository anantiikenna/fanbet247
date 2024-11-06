const cache: Map<string, CacheEntry> = new Map();
const cacheArray: Map<string, CacheEntryArray> = new Map();

// Fetch with caching for a single Fixture
export async function fetchFixtureWithCache(url: string): Promise<Fixture> {
    console.log("Fetching new fixture data");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture = await response.json();
        cache.set(url, { data, expiry: Date.now() + 60000 }); // Set expiry for 2 seconds
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// Fetch with caching for an array of Fixtures
export async function fetchFixturesWithCache(url: string): Promise<Fixture[]> {
    console.log("Fetching new fixtures array data");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture[] = await response.json();
        cacheArray.set(url, { data, expiry: Date.now() + 60000 }); // Set expiry for 2 seconds
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
