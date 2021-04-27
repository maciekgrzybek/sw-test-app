import { keyBy, uniq } from 'lodash';
import { useEffect, useState } from 'react';
import { LoadingStatus } from '../types/loadingStatus';
import { PeopleSuccessResponse, Person, PersonView } from '../types/people';
import { Planet, PlanetsSuccessResponse } from '../types/planets';

async function fetchPeople(name: string): Promise<PeopleSuccessResponse> {
  const url = `https://swapi.dev/api/people?search=${name}`;
  try {
    const response = fetch(url);
    return (await response).json();
  } catch (error) {
    return error;
  }
}

async function fetchPlanet(url: string): Promise<PlanetsSuccessResponse> {
  try {
    const response = fetch(url);
    return (await response).json();
  } catch (error) {
    return error;
  }
}

const getPlanetsUrls = (people: Person[]) =>
  uniq(people.map(({ homeworld }) => homeworld));

function mapData(people: Person[], planets: Planet[]): PersonView[] {
  const keyedPlanets = keyBy(planets, 'url');
  return people.map(({ name, homeworld }) => {
    const { name: homeworldName, population } = keyedPlanets[homeworld];
    return {
      name,
      homeworldName,
      homeworldPopulation: population,
    };
  });
}

export function useFetchPeople(name: string) {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [data, setData] = useState<PersonView[] | null>(null);
  const [status, setStatus] = useState<LoadingStatus>('idle');

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch) {
        setStatus('loading');
        try {
          const { results: people } = await fetchPeople(name);
          const planets = await Promise.all(
            getPlanetsUrls(people).map((url) => fetchPlanet(url))
          );
          const mappedData = mapData(people, planets);

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
