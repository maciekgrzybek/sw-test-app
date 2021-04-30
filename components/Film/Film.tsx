import { truncate } from 'lodash';

import { FilmView } from '../../types/films';
import styles from './Film.module.css';

type Props = FilmView;

export default function Film({ title, release_date, opening_crawl }: Props) {
  const shortCrawl = truncate(opening_crawl, { length: 130 });

  return (
    <li className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.meta}>Release date: {release_date}</span>
      <span className={styles.meta}>Intro: {shortCrawl}</span>
    </li>
  );
}
