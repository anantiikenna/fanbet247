const cache: Map<string, CacheEntry> = new Map();
const cacheArray: Map<string, CacheEntryArray> = new Map();

// Background cache cleanup function
function cleanCache(map: Map<string, { expiry: number }>) {
  const now = Date.now();
  for (const [key, value] of map.entries()) {
    if (now >= value.expiry) {
      map.delete(key);
    }
  }
}

// Run cleanup every 60 seconds
setInterval(() => {
  cleanCache(cache);
  cleanCache(cacheArray);
}, 60000);

// Fetch with caching for a single Fixture
export async function fetchFixtureWithCache(url: string, cacheTime: number = 300000): Promise<Fixture> {
  const now = Date.now();
  const cached = cache.get(url);
  
  if (cached && now < cached.expiry) {
    console.log("Serving fixture data from cache");
    return cached.data;
  } else if (cached && now >= cached.expiry) {
    // Remove expired data immediately
    cache.delete(url);
  }

  console.log("Fetching new fixture data");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data: Fixture = await response.json();
    cache.set(url, { data, expiry: now + cacheTime });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Fetch with caching for an array of Fixtures
export async function fetchFixturesWithCache(url: string, cacheTime: number = 300000): Promise<Fixture[]> {
  const now = Date.now();
  const cachedArray = cacheArray.get(url);
  
  if (cachedArray && now < cachedArray.expiry) {
    console.log("Serving fixtures array data from cache");
    return cachedArray.data;
  } else if (cachedArray && now >= cachedArray.expiry) {
    // Remove expired data immediately
    cacheArray.delete(url);
  }

  console.log("Fetching new fixtures array data");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data: Fixture[] = await response.json();
    cacheArray.set(url, { data, expiry: now + cacheTime });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
