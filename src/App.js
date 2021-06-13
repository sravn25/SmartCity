import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Commute from "./pages/Commute";
import News from "./pages/News";
import Events from "./pages/Events";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>

        <Switch>
          <Route path="/commute">
            <Commute />
          </Route>
        </Switch>

        <Switch>
          <Route path="/news">
            <News />
          </Route>
        </Switch>

        <Switch>
          <Route path="/events">
            <Events />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
