import './App.css';
import { Route, Switch } from 'react-router-dom';
import TvShowList from './components/TvShowList';
import TvShowDetails from './components/TvShowDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TvShowList} />
        <Route exact path="/show/:id" render={routeProps => <TvShowDetails id={routeProps.match.params.id} routeProps={routeProps} />} />
      </Switch>
    </div>
  );
}

export default App;
