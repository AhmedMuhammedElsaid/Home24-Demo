import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { App } from './App';
import Loader from './components/Loader';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
