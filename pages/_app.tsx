import 'styles/globals.sass';
import type { AppProps } from 'next/app';
import { Layout, LoginContextProvider } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginContextProvider>
  );
}

export default MyApp;
