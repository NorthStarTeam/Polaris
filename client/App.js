import React from 'react';
import { UserProvider } from './components/UserState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {
  return (
    <UserProvider>
      {/* <Route path="/" component={Login} exact />
      <Route path="/profile" component={Profile} exact /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={SignUp} exact />
          <Route path="/SignUp" component={Profile} exact />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
