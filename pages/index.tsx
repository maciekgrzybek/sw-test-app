import Head from 'next/head';
import React, { useState } from 'react';
import Form from '../components/Form/Form';
import Person from '../components/Person/Person';
import { useFetchPeople } from '../hooks/useFetchPeople';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, status, fetchData } = useFetchPeople(searchTerm);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
          <ul>
            {data.map((person) => (
              <Person {...person} key={person.name} />
            ))}
          </ul>
        ) : null}
      </main>
    </div>
  );
}
