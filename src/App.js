import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    useHistory,
    Link
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';
import { AppContextProvider } from './components/AppContext';
import Step from './Steps/Step.js'
import NotFound from "./Steps/NotFound";
import jsonData from './steps.json';
import Components from './components'

function App() {

    const location = useHistory();
    console.log("location", location);

  return (
      <AppContextProvider>
          <Router>
              <TransitionGroup>
                  <CSSTransition
                     // key={location.pathname}
                      classNames="fade"
                      timeout={600}
                  >
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
                          path="/step/:id"
                          render={props => (
                              <Step {...props} title={`Props through render`} />
                          )}
                      />
                      <Route path='/formStep/' >
                          <h1>Hello React</h1>
                          {jsonData.map(block => Components(block))}
                      </Route>
                  </Switch>
                  </CSSTransition>
              </TransitionGroup>
          </Router>
      </AppContextProvider>
  );
}

export default App;
