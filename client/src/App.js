import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import WelcomePage from "./welcome-page/Welcome-page";
import NavBar from "./welcome-page/NavBar";
import SignIn from "./sign-in-page/SignIn"
import theme from "./globals/theme";
import Login from "./login-page/Login";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavBar />

    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/login" exact component={Login} />
    </Switch>

    </ThemeProvider>
  </BrowserRouter>
);


export default App;
