import React from 'react';
import Navbar from './components/navbar';
import Users from './components/users/Users';
import Search from './components/users/search';
import Alert from './alert';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './pages/about';
import User from './components/users/user';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState'
import Home from './pages/home';
import NotFound from './pages/notFound';

const App=()=>{
    return (
      <GithubState>
        <AlertState>
      <Router>

      <div className='App'>
        <Navbar/>
        <div className='container'>
          <Alert />
          <Switch>
            <Route path='/' exact component={Home}
            />
            <Route path='/about' exact component={About}/>   
            <Route path='/user/:login' exact component={User}/>
            <Route component={NotFound}/>
              
          </Switch>
        </div>
        
      </div>
      </Router>
      </AlertState>
      </GithubState>
    ) 
  
  }
 
export default App;