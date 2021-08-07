import React from 'react';
import './App.css';
import { Dashboard, Products, Users, Login } from './Screens';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/login" component={Login}/>
        <Route path="/products" component={Products}/>
        <Route path="/users" component={Users}/>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </Router>

  );
}

export default App;