import React, { Suspense, lazy } from 'react';
import { UserProvider } from './context/AccState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

// const Home = lazy(() => import('./components/Home'));
// const Login = lazy(() => import('./components/Login'));
// const SignUp = lazy(() => import('./components/SignUp'));
// const Dashboard = lazy(() => import('./components/Dashboard'));

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Route path="/login" component={Login} exact />
          {/* </Suspense> */}
          <Route path="/signup" component={SignUp} exact />
          {/* <PrivateRoute path="/protected" component={Profile} /> */}
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Route path="/dashboard" component={Dashboard} exact />
          </Suspense>
          <Route path="/logout" component={Login} exact />
          <Route path="/setting" component={SignUp} exact />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
