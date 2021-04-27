import Head from 'next/head';
import { useEffect, useState } from 'react';
import { InputGroup, Input, Icon, InputPicker } from 'rsuite';

import { useFetchPeople } from '../hooks/useFetch';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  const [searchCategory, setSearchCategory] = useState<string>('name');

  const { data, isLoading, isError } = useFetchPeople(shouldFetch);

  const couldFetch = !isLoading && !!searchTerm;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form>
          <div>
            <InputGroup>
              <Input
                placeholder="Search for hero..."
                onChange={setSearchTerm}
                value={searchTerm}
              />
              <InputGroup.Button disabled={!couldFetch}>
                <Icon icon="search" />
              </InputGroup.Button>
            </InputGroup>
            <InputPicker
              placeholder="Search by"
              defaultValue="name"
              onChange={setSearchCategory}
              value={searchCategory}
              data={[
                {
                  value: 'name',
                  label: 'Name',
                  role: 'Master',
                },
                {
                  value: 'homeworld-name',
                  label: 'Homeworld name',
                  role: 'Master',
                },
                {
                  value: 'homeworld-population',
                  label: 'Homeworld population',
                  role: 'Master',
                },
              ]}
            />
          </div>
        </form>
      </main>
    </div>
  );
}
