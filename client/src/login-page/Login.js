import React from "react";
import PageStyle from "../common-components/styled-components/PageStyle";
import { InteractionCard } from "../common-components/styled-components/UtiltyComps";
import LoneDiver from "../img/lonediver.gif";
import SingInForm from "./LoginForm";

const Login = () => {
  return (
    <PageStyle backGroundImage={LoneDiver}>
      <InteractionCard>
        <SingInForm />
      </InteractionCard>
    </PageStyle>
  );
};
export default Login;
