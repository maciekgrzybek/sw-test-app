import { InferGetServerSidePropsType } from 'next';
import React from 'react';
import Film from '../../components/Film/Film';

import { fetchPersonsFilms } from '../../utils/fetchers';

export default function Films({
  data,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (error) {
    return <div>{error}</div>;
  }

  if (!data) return null;

  return (
    <ul>
      {data.map((film) => (
        <Film {...film} key={film.title} />
      ))}
    </ul>
  );
}

export async function getServerSideProps(context) {
  const response = await fetchPersonsFilms(context.params.id);

  return { props: { ...response } };
}
