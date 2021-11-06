import '../styles/globals.css';
import { StateProvider } from '../context/StateProvider';
import reducer, { initialState } from '../context/reducer';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
