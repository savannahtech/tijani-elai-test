import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { theme } from '@/assets/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ChakraProvider>
  );
}
