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


// export const formatDateMMDDWithDay = (dateString: string): string => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString('en-US', { weekday: 'long', month: '2-digit', day: '2-digit' });
// };

// Format date as MM/DD
export const formatDateMMDD = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
};

// Format date to show time in AM/PM
export const formatTimeAMPM = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
};

export const formatDateMMDDWithDay = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { 
    month: '2-digit', 
    day: '2-digit', 
    weekday: 'long' 
  };
  
  const formattedDate = date.toLocaleDateString('en-US', options);
  
  // Extract day and date parts and reorder them
  const [weekday, mmdd] = formattedDate.split(', ');
  return `${mmdd} ${weekday}`;
};