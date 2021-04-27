export interface Person {
  name: string;
  url: string;
  films: unknown[];
  homeworld: string;
}

export interface PersonView {
  name: string;
  homeworldName: string;
  homeworldPopulation: string;
}

export interface PeopleSuccessResponse {
  results: Person[];
}
