import Head from 'next/head';
import Router from 'next/router';
import React, { useState } from 'react';
import { Loader } from 'rsuite';

import Form from '../components/Form/Form';
import Person from '../components/Person/Person';
import { useFetchPeople } from '../hooks/useFetchPeople';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, status, fetchData } = useFetchPeople(searchTerm);
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  Router.events.on('routeChangeStart', () => {
    setIsRouteChanging(true);
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Search - Star Wars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isRouteChanging && (
        <div className={styles.loadingScreen}>
          {' '}
          <Loader size="md" />
        </div>
      )}
      <main className={styles.main}>
        <h1 className={styles.title}>Search for Star Wars character</h1>
        <Form
          handleFormSubmit={handleFormSubmit}
          status={status}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {data?.length === 0 && status === 'success' && (
          <span>
            No characters matching the search term. Please try different search
            term.
          </span>
        )}
        {data ? (
          <ul className={styles.list}>
            {data.map((person) => (
              <Person {...person} key={person.name} />
            ))}
          </ul>
        ) : null}
      </main>
    </div>
  );
}
