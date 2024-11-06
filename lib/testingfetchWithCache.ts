// testingfetchWithCache.ts
const testCache: Map<string, CacheEntrye> = new Map();

interface CacheEntrye {
  data: unknown;
  expiry: number;
}

// 1-second cache for testing purposes
export async function fetchWith1SecCache(url: string): Promise<unknown> {
  const cached = testCache.get(url);

  if (cached && Date.now() < cached.expiry) {
    console.log("Serving from cache");
    return cached.data;
  }

  console.log("Fetching new data");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    testCache.set(url, { data, expiry: Date.now() + 1000 }); // Set 1-second expiry
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
