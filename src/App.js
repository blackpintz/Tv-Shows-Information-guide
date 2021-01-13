import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import connectTvShowList from './components/TvShowList';
import ConnectTvShowDetails from './components/TvShowDetails';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={connectTvShowList} />
      <Route exact path="/show/:id" render={routeProps => <ConnectTvShowDetails id={routeProps.match.params.id} routeProps={routeProps} />} />
    </Switch>
  </div>
);

export default App;
