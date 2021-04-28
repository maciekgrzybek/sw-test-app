import { keyBy, uniq } from 'lodash';
import { Person, PersonView } from '../types/people';
import { Planet } from '../types/planets';

export const getIdFromUrl = (url: string): string => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
};

export const getPlanetsUrls = (people: Person[]) =>
  uniq(people.map(({ homeworld }) => homeworld));

export function mapPersonPlanetsData(
  people: Person[],
  planets: Planet[]
): PersonView[] {
  const keyedPlanets = keyBy(planets, 'url');
  return people.map(({ name, homeworld, url }) => {
    const { name: homeworldName, population } = keyedPlanets[homeworld];
    return {
      name,
      homeworldName,
      homeworldPopulation: population,
      url,
    };
  });
}
