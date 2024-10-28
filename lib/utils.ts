import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Infinite Scroll Function
export function setupInfiniteScroll(
  loadMore: () => Promise<void>, // Function to load more data
  threshold: number = 300 // Distance from the bottom to trigger loadMore
) {
  const handleScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold) {
      await loadMore();
    }
  };

  // Attach scroll listener
  window.addEventListener('scroll', handleScroll);

  // Clean up listener when no longer needed
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

// Function to convert fixture.date to a time string
export const formatMatchTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Returns time in HH:MM format
};
