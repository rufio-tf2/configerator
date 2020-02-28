import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import { Dashboard } from '../screens';
import { StoreProvider } from '../state';
import { theme } from '../styles';
import routes from './routes';

const Layout = styled.div`
  background-color: ${theme.colors.rainbowgray};
  height: 100%;
`;

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Layout className="App-Layout">
            <Route exact path="/">
              <Redirect
                to={{
                  pathname: routes.dashboard,
                }}
              />
            </Route>
            <Route path={routes.dashboard}>
              <Dashboard />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
