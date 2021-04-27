import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { InputGroup, Input, Icon, Button } from 'rsuite';
import Form from '../components/Form/Form';

import { useFetchPeople } from '../hooks/useFetch';

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
        {data
          ? data.map((el) => (
              <div>
                <h2>{el.name}</h2>
              </div>
            ))
          : null}
      </main>
    </div>
  );
}
