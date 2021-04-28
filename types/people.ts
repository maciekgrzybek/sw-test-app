export interface Person {
  name: string;
  url: string;
  films: string[];
  homeworld: string;
}

export interface PersonView {
  name: string;
  homeworldName: string;
  homeworldPopulation: string;
  url: string;
}

export interface PeopleSuccessResponse {
  results: Person[];
}
