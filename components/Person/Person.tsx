import Link from 'next/link';

import { PersonView } from '../../types/people';
import { getIdFromUrl } from '../../utils/mappers';

import styles from './Person.module.css';

type Props = PersonView;

export default function Person({
  name,
  homeworldName,
  homeworldPopulation,
  url,
}: Props) {
  const id = getIdFromUrl(url);

  return (
    <li className={styles.wrapper}>
      <Link href={`/films/${id}`}>
        <a className={styles.link}>
          <h2 className={styles.title}>{name}</h2>
          <span className={styles.meta}>Homeworld planet: {homeworldName}</span>
          <span className={styles.meta}>
            Homeworld planet population: {homeworldPopulation}
          </span>
        </a>
      </Link>
    </li>
  );
}
