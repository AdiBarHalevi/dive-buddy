import { Route, Switch, Router } from "react-router";
import { ThemeProvider } from "styled-components";

import history from "./globals/history";

import WelcomePage from "./welcome-page/Welcome-page";
import SignIn from "./sign-in-page/SignIn";
import theme from "./globals/theme";
import Login from "./login-page/Login";
import MainPage from "./main-page/MainPage";
import EventList from "./main-page/Event-components/EventDetails"

import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/login" exact component={Login} />
            <Route path="/dashBoard" exact component={MainPage} />
            <Route path="/dashBoard/event-list" exact component={EventList} />
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
