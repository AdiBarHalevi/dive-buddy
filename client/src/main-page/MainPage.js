import React from "react";

import {
  FlexBoxStyledComponent,
  InteractionCard,
} from "../common-components/styled-components/UtiltyComps";

import PageStyle from "../common-components/styled-components/PageStyle";

import Bubbles from "../img/bubblesGif.gif";
import styled from "styled-components";
import UserCalendar from "./UserCalendar";

const MainPage = () => (
  <PageStyle backGroundImage={Bubbles}>
    <DashBoardContainer>
      <UserCalendar></UserCalendar>
      <GreetSign>hello Adi,welcome back</GreetSign>
    </DashBoardContainer>
  </PageStyle>
);

export default MainPage;

const DashBoardContainer = styled.div`
    color:${(props) => props.theme.colors.fontColor};
    display:flex;
    justify-content:center;
    border:1px solid white;
    z-index:1;
    position;relative;
    width:90%;
    height:90%;
    &:after{
        content:"2222222";
        top:5%;
        left:5%;
        background:white;
        opacity:0.9;
        filter: blur(8px);
        width:90%;
        height:90%;
        position:absolute;
    }
`;

const GreetSign = styled.div`
  z-index: 1;
  font-size: 3rem;
`;
