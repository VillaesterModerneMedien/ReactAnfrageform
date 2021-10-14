import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './App.css';
import { AppContextProvider } from './components/AppContext';
import Step from './Steps/Step.js'
import NotFound from "./Steps/NotFound";
import jsonData from './steps.json';
import Components from './components'

function App() {

  return (
      <AppContextProvider>
          <Router>
              <Switch>
                  <Route exact path="/multistep">
                      <div className="App">
                          aaa
                      </div>
                  </Route>
                  <Route exact path="/">
                      <div className="App">
                      </div>
                  </Route>
                  <Route exact path="/wurst">
                      <div className="App">

                      </div>
                  </Route>
                  <Route
                      exact
                      path="/books/:id"
                      render={props => (
                          <Step {...props} title={`Props through render`} />
                      )}
                  />
                  <Route path='/formStep/' >
                      <h1>Hello React</h1>
                      {jsonData.map(block => Components(block))}
                  </Route>
              </Switch>

          </Router>
      </AppContextProvider>
  );
}

export default App;
