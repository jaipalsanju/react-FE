import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Table from './Table';
import Flex from './Flex';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Table />
    <Flex />
  </StrictMode>
);
