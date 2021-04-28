import { InputGroup, Input, Button } from 'rsuite';
import Link from 'next/link';

import { LoadingStatus } from '../../types/loadingStatus';
import { PersonView } from '../../types/people';
import { getIdFromUrl } from '../../utils/mappers';

type Props = PersonView;

export default function Person({
  name,
  homeworldName,
  homeworldPopulation,
  url,
}: Props) {
  const id = getIdFromUrl(url);
  return (
    <li>
      <Link href={`/films/${id}`}>
        <a href="">
          <h2>{name}</h2>
          <h3>Homeworld planet: {homeworldName}</h3>
          <h3>Homeworld planet population: {homeworldPopulation}</h3>
        </a>
      </Link>
    </li>
  );
}
