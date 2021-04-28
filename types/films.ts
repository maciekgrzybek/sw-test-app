export interface Film {
  title: string;
  opening_crawl: string;
  release_date: string;
}

export type FilmView = Film;

export type FilmsSuccessResponse = Film;
