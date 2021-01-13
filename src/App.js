import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import TvShowList from './components/TvShowList';
import TvShowDetails from './components/TvShowDetails';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={TvShowList} />
      <Route exact path="/show/:id" render={routeProps => <TvShowDetails id={routeProps.match.params.id} routeProps={routeProps} />} />
    </Switch>
  </div>
);

export default App;
