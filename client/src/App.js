import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import WelcomePage from "./welcome-page/Welcome-page";
import NavBar from "./welcome-page/Header";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
