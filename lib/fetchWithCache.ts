const cache: Map<string, CacheEntry> = new Map();
const cacheArray: Map<string, CacheEntryArray> = new Map();


// Fetch with caching for a single Fixture
export async function fetchFixtureWithCache(url: string, cacheTime: number = 300000): Promise<Fixture> {
    // Check if the data is in cache and not expired
    const cached = cache.get(url);
    if (cached && Date.now() < cached.expiry) {
        console.log("Serving fixture data from cache");
        return cached.data;
    }

    console.log("Fetching new fixture data");
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture = await response.json();
        // Cache the new data and set expiry
        cache.set(url, { data, expiry: Date.now() + cacheTime });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

// Fetch with caching for an array of Fixtures
export async function fetchFixturesWithCache(url: string, cacheTime: number = 300000): Promise<Fixture[]> {
    // Check if the data is in cache and not expired
    const cachedArray = cacheArray.get(url);
    if (cachedArray && Date.now() < cachedArray.expiry) {
        console.log("Serving fixtures array data from cache");
        return cachedArray.data;
    }

    console.log("Fetching new fixtures array data");
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const data: Fixture[] = await response.json();
        // Cache the new data and set expiry
        cacheArray.set(url, { data, expiry: Date.now() + cacheTime });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
