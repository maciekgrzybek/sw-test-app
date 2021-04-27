import { useState } from 'react';
import useSWR from 'swr';

type UseFetchReturn<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};

const fetcher = (url) => fetch(url).then((r) => r.json());

export function useFetchPeople(
  shouldFetch: boolean = false,
  id?: string,
  name?: string
) {
  let url = 'https://swapi.dev/api/people';

  if (id) {
    url = `${url}/${id}`;
  }
  if (name) {
    url = `${url}/${name}`;
  }

  const { data, error } = useSWR(() => (shouldFetch ? url : null), fetcher);

  return {
    data,
    isLoading: !error && !data && shouldFetch,
    isError: error,
  };
}
