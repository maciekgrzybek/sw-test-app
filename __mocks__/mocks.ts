import { API_FILMS, API_PEOPLE, API_PLANETS } from '../config';
import { Film } from '../types/films';
import { Person, PersonView } from '../types/people';

export const mockedPerson: Person = {
  name: 'Luke Skywalker',
  url: `${API_PEOPLE}/1`,
  films: [`${API_FILMS}/1`, `${API_FILMS}/2`],
  homeworld: `${API_PLANETS}/1`,
};

export const mockedFilms: Record<string, Film> = {
  '1': {
    title: 'A New Hope',
    release_date: '1977-05-25',
    opening_crawl: `It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.  During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.  Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....`,
  },
  '2': {
    title: 'The Empire Strikes Back',
    release_date: '1980-05-17',
    opening_crawl: `It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.  The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....`,
  },
};
