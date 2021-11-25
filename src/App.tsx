import React, { lazy, FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { client } from './services/client';
import { theme } from './services/theme';

//render the component on need "code splitting concept "
const Home = lazy(() => import('./pages/Home'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

export const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={`/:articleName`} component={Home} />
            <Route component={ErrorPage} />
          </Switch>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
};
