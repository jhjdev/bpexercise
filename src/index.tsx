import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {createApolloClient} from './common/config/apollo-client';

import Home from './screens/Home';

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
