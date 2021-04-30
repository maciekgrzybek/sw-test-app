export interface Film {
  title: string;
  opening_crawl: string;
  release_date: string;
}

export interface PersonsFilms {
  personsName: string;
  films: Film[];
}

export type FilmView = Film;

export type FilmsSuccessResponse = Film;
