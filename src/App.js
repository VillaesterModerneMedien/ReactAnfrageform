import logo from './logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './App.css';
import { AppContextProvider } from './components/AppContext';
import StepOne from './Steps/stepOne.js'
import StepTwo from './Steps/stepTwo.js'
import StepThree from './Steps/stepThree.js'
import Step from './Steps/Step.js'
import NotFound from "./Steps/NotFound";
import jsonData from './steps.json';
import Components from './components'

const steps = [
  { component: <StepOne /> },
  { component: <StepTwo /> },
  { component: <StepThree /> },
]

// custom styles
const prevStyle = { background: '#33c3f0' }
const nextStyle = { background: '#33c3f0' }
const id = 10

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
