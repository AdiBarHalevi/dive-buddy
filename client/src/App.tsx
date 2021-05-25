import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import WelcomePage from "./welcome-page/WelcomePage";
import NavBar from "./welcome-page/NavBar";
import SignIn from "./sign-in-page/SignIn"
import theme from "./globals/theme";

const App = () => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>

      <NavBar />

      <Switch>
        <Route path="/" exact component={WelcomePage} />

        <Route path="/sign-in" exact component={SignIn} />
      </Switch>

      </ThemeProvider>
    </BrowserRouter>
  );


export default App;
