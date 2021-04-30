import { screen, waitFor } from '@testing-library/react';
import { getPage } from 'next-page-tester';

import { mockedFilms } from '../__mocks__/mocks';
import { truncate } from 'lodash';

test('displays the list of films with the correct data', async () => {
  const { render } = await getPage({
    route: '/films/1',
  });

  render();
  await waitFor(() => {
    Object.values(mockedFilms).forEach(
      ({ title, release_date, opening_crawl }) => {
        const shortCrawl = truncate(opening_crawl, { length: 130 });

        expect(
          screen.getByRole('heading', { level: 2, name: title })
        ).toBeInTheDocument();
        expect(
          screen.getByText(`Release date: ${release_date}`, { exact: false })
        ).toBeInTheDocument();
        expect(
          screen.getByText(`Intro: ${shortCrawl}`, { exact: false })
        ).toBeInTheDocument();
      }
    );
  });
});

test('shows the "Not found" message when cannot find the person with id from the url', async () => {
  const { render } = await getPage({
    route: '/films/100',
  });

  render();

  await waitFor(() => {
    expect(screen.getByText('Character not found')).toBeInTheDocument();
  });
});
