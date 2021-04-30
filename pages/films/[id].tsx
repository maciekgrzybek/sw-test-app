import React from 'react';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import Film from '../../components/Film/Film';
import { fetchPersonsFilms } from '../../utils/fetchers';

import styles from '../../styles/Films.module.css';

export default function Films({
  data,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <Head>
        {data?.personsName ? (
          <title>Films with {data.personsName} - Star Wars</title>
        ) : (
          <title>Character not found - Star Wars</title>
        )}

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {data?.personsName && (
          <h1 className={styles.title}>Films with {data.personsName} in it:</h1>
        )}
        {error && <div>{error}</div>}
        <ul>
          {data?.films.map((film) => (
            <Film {...film} key={film.title} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetchPersonsFilms(context.params.id);

  return { props: { ...response } };
}
