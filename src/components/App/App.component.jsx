import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalContextProvider from "../../providers/StateManagement/StateGlobal.provider";
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
