import PlayersProvider from '@/contexts/PlayersContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useFetch } from 'usehooks-ts';

const App = ({ Component, pageProps }: AppProps) => {
  // useEffect(() => {
  const { data, error } = useFetch(process.env.DATABASE_URL);
  console.log('data: ', data);
  // });

  return (
    <>
      <PlayersProvider>
        <Component {...pageProps} />
      </PlayersProvider>
    </>
  );
};

export default App;
