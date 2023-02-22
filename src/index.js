import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Table from './Table';
import Flex from './Flex';
import State from './State';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Table />
    <State />
    <Flex />
   
  </StrictMode>
);
