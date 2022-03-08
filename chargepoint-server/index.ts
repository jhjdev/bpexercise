import express from 'express';
import {createServer} from 'http';

import initialiseApolloServer from './apolloServer';

const app = express();
const server = createServer(app);

// Initialise Apollo server
initialiseApolloServer(app);

server.listen({port: 4010}, () => {
  console.log('ChargePoint Server Ready on port 4010');
});

// Shut down in the case of interrupt and termination signals
['SIGINT', 'SIGTERM'].forEach(signal => {
  process.on(signal, () => server.close());
});
