import React from "react";
import { List } from "./views/List";
import Lists from "./views/Lists";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import JobsByLists from "./views/JobsByLists";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-h-screen bg-gray-100 grid grid-cols-12 gap-2">
          <Switch>
            <Route path="/list/:id">
              <List />
            </Route>
            <Route path="/lists">
              <Lists />
            </Route>
            <Route path="/">
              <JobsByLists />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
