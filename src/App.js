//import logo from './logo.svg';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Twform from './components/FForm';
import FResults from './components/FResults';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Container id="bigbig">
      <div id="bigdiv2">
        <Router>
        <Switch>
          <Route exact path="">
            <Twform />
          </Route>
          <Route exact path="#/FResults">
            <FResults />
          </Route>
        </Switch>
        </Router>
      </div>
    </Container>   
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Did it change?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>/*/
  );
}

export default App;
