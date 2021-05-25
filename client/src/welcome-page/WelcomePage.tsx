import React from "react";
import {FlexBoxStyledComponent,InteractionCard} from "../common-components/styled-components/UtiltyComps";

import PageStyle from "../common-components/styled-components/PageStyle";
import {
  BottonsDivStyle,
  H1,
  Paragraph,
} from "./WelcomeSignStyle";

import Wave from "../img/wavegif.gif";
import LinkButton from "../common-components/LinkButton";

const WelcomePage = () => {
  return (
    <PageStyle backGroundImage={Wave} backGroundColor="#53ccec">
      <InteractionCard>
        <FlexBoxStyledComponent flexDirection="column" width="2rem">
          <H1>DiveBuddy!</H1>

          <Paragraph>Find a Buddy to dive with</Paragraph>
        </FlexBoxStyledComponent>

        <BottonsDivStyle>
          <FlexBoxStyledComponent
            justifyContent="center"
            flexDirection="column"
          >
            <LinkButton destination="/log-in"
               color="white"
               title="Log in"
               label="already a user?"/>
          </FlexBoxStyledComponent>

          <FlexBoxStyledComponent
            justifyContent="center"
            flexDirection="column"
          >
          <LinkButton destination="/sign-in"
            color="white"
            title="Sign in"
            label="Join Our Comunity"/>
          </FlexBoxStyledComponent>
        </BottonsDivStyle>
      </InteractionCard>
    </PageStyle>
  );
};

export default WelcomePage;
