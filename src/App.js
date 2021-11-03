import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
