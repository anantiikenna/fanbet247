export const API_URLS = {
    FETCH_UPCOMING_FIXTURES: process.env.NEXT_PUBLIC_API_FETCH_UPCOMING_FIXTURES,
    FETCH_SINGLE_FIXTURE_DETAILS: (fixture_id: number) =>
      `${process.env.NEXT_PUBLIC_API_FETCH_SINGLE_FIXTURE_DETAILS}/${fixture_id}/?format=json`,
  };
  