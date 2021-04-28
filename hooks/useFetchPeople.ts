import { useEffect, useState } from 'react';

import { LoadingStatus } from '../types/loadingStatus';
import { PersonView } from '../types/people';
import { fetchPeopleBySearchTerm, fetchPlanet } from '../utils/fetchers';
import { getPlanetsUrls, mapPersonPlanetsData } from '../utils/mappers';

export function useFetchPeople(name: string) {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [data, setData] = useState<PersonView[] | null>(null);
  const [status, setStatus] = useState<LoadingStatus>('idle');

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch) {
        setStatus('loading');
        try {
          const { results: people } = await fetchPeopleBySearchTerm(name);
          const planets = await Promise.all(
            getPlanetsUrls(people).map((url) => fetchPlanet(url))
          );
          const mappedData = mapPersonPlanetsData(people, planets);

          setData(mappedData);
          setStatus('success');
          setShouldFetch(false);
        } catch (error) {
          setStatus('error');
        }
      }
    };

    fetchData();
  }, [shouldFetch]);

  return {
    data,
    status,
    fetchData: () => setShouldFetch(true),
  };
}
