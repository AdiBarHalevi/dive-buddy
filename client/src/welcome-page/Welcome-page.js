import React from "react";
import {
  FlexBoxStyledComponent,
  InteractionCard,
} from "../common-components/styled-components/UtiltyComps";

import PageStyle from "../common-components/styled-components/PageStyle";
import { H1, Paragraph } from "./welcomeSignStyle";

import Wave from "../img/wavegif.gif";
import LinkButton from "../common-components/LinkButton";

const WelcomePage = () => (
  <PageStyle backGroundImage={Wave}>
    <InteractionCard>
      <FlexBoxStyledComponent flexDirection="column" width="2rem">
        <H1>DiveBuddy!</H1>
        <Paragraph>Find a Buddy to dive with</Paragraph>
      </FlexBoxStyledComponent>

      <FlexBoxStyledComponent justifyContent="center" flexDirection="row">
        <LinkButton
          destination="/login"
          color="white"
          title="Log in"
          label="already a user?"
        />
        <LinkButton
          destination="/signIn"
          color="white"
          title="Sign in"
          label="Join Our Comunity"
        />
      </FlexBoxStyledComponent>
    </InteractionCard>
  </PageStyle>
);

export default WelcomePage;
