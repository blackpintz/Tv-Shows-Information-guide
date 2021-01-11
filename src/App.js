import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './App.css';
import TvShowList from './components/TvShowList';
import TvShowDetails from './components/TvShowDetails';

const App = ({ tvShows }) => {
  console.log(tvShows);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TvShowList} />
        <Route exact path="/show/:id" render={routeProps => <TvShowDetails id={routeProps.match.params.id} routeProps={routeProps} />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ tvShows }) => ({
  tvShows,
});

App.propTypes = {
  tvShows: propTypes.arrayOf(propTypes.object),
};

App.defaultProps = {
  tvShows: 'no value',
};

export default connect(mapStateToProps)(App);
