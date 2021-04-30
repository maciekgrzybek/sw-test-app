import { rest } from 'msw';

import { API_FILMS, API_PEOPLE } from '../config';
import { mockedPerson, mockedFilms } from '../__mocks__/mocks';

const handlers = [
  // Return the mocked film
  rest.get(`${API_FILMS}/:id`, (req, res, ctx) => {
    const { id } = req.params;

    return res(ctx.json(mockedFilms[id]));
  }),

  // Return the mocked person
  rest.get(`${API_PEOPLE}/:id`, (req, res, ctx) => {
    const { id } = req.params;

    // Only listen for one type of character, error out the rest
    if (id !== '1') {
      return res(
        ctx.json({
          detail: 'Not found',
        })
      );
    }
    return res(ctx.json(mockedPerson));
  }),
];
export { handlers };
