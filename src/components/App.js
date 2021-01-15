import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import connectTvShowList from '../containers/TvShowList';
import ConnectTvShowDetails from '../containers/TvShowDetails';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={connectTvShowList} />
      <Route exact path="/show/:id" render={routeProps => <ConnectTvShowDetails id={routeProps.match.params.id} routeProps={routeProps} />} />
    </Switch>
  </div>
);

export default App;
