import { API_PEOPLE } from '../config';
import { FilmsSuccessResponse } from '../types/films';
import { PeopleSuccessResponse, Person } from '../types/people';
import { PlanetsSuccessResponse } from '../types/planets';

async function genericFetch<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchPeopleBySearchTerm(name: string) {
  const url = `${API_PEOPLE}?search=${name}`;
  return genericFetch<PeopleSuccessResponse>(url);
}

export async function fetchPersonById(id: string) {
  const url = `${API_PEOPLE}/${id}`;
  return genericFetch<Person>(url);
}

export async function fetchPlanet(url: string) {
  return genericFetch<PlanetsSuccessResponse>(url);
}

export async function fetchFilm(url: string): Promise<FilmsSuccessResponse> {
  return genericFetch<FilmsSuccessResponse>(url);
}

export async function fetchPersonsFilms(
  id: string
): Promise<{ data?: FilmsSuccessResponse[]; error?: string }> {
  try {
    const person = await fetchPersonById(id);
    if (!person?.films) {
      throw new Error();
    }
    const data = await Promise.all(person.films.map((url) => fetchFilm(url)));
    return { data };
  } catch (error) {
    return { error: 'Character not found' };
  }
}
