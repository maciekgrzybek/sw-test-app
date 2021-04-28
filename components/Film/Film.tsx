import { truncate } from 'lodash';
import { FilmView } from '../../types/films';

type Props = FilmView;

export default function Film({ title, release_date, opening_crawl }: Props) {
  const shortCrawl = truncate(opening_crawl, { length: 130 });

  return (
    <li>
      <h2>{title}</h2>
      <h3>Release date: {release_date}</h3>
      <h3>Summary: {shortCrawl}</h3>
    </li>
  );
}
