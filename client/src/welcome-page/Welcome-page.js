import React from "react";
import {
  FlexBoxStyledComponent,
  Button,
  StyledLink,
} from "../common-components/styled-components/UtiltyComps";

import PageStyle from "../common-components/styled-components/PageStyle";
import {
  WelcomeSignStyleDiv,
  BottonsDivStyle,
  H1,
  Paragraph,
} from "./welcomeSignStyle";

import Wave from "../img/wavegif.gif";

const WelcomePage = () => {
  return (
    <PageStyle backGround={Wave}>
      <WelcomeSignStyleDiv>
        <FlexBoxStyledComponent flexDirection="column" width="2rem">
          <H1>DiveBuddy!</H1>
          <Paragraph>Find a Buddy to dive with</Paragraph>
        </FlexBoxStyledComponent>

        <BottonsDivStyle>
          <FlexBoxStyledComponent
            justifyContent="center"
            flexDirection="column"
          >
            <label>already a user?</label>

            <Button>
              {" "}
              <StyledLink to="/log-in" color="white">
                Log in
              </StyledLink>
            </Button>
          </FlexBoxStyledComponent>
          <FlexBoxStyledComponent
            justifyContent="center"
            flexDirection="column"
          >
            <label>care to join?</label>
            <Button>
              <StyledLink to="/sign-in" color="white">
                Sign in
              </StyledLink>
            </Button>
          </FlexBoxStyledComponent>
        </BottonsDivStyle>
      </WelcomeSignStyleDiv>
    </PageStyle>
  );
};

export default WelcomePage;
