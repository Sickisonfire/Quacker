import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';

import theme from './theme';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools initialIsOpen={false} />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>,

  document.getElementById('root')
);
