import React, { useState } from "react";

import { Button, FlexBoxStyledComponent } from "../common-components/styled-components/UtiltyComps";

import PageStyle from "../common-components/styled-components/PageStyle";

import Bubbles from "../img/bubblesGif.gif";
import { userGlobalDataState } from "../globals/atoms";
import { useRecoilValue } from "recoil";
import NavBar from "./NavBar";
import WelcomeToDashBoard from "./WelcomeToDashBoard";
import EventList from "./Event-components/EventList";
import { DashBoardContainer, MainDivDashBoardStyle } from "./MainPageStyle";
import PostAtrip from "./PostAtrip";

const MainPage = () => {

  const userGlobalData = useRecoilValue(userGlobalDataState); 


  const [displayState, setDisplayState] = useState("greet");

  const handleClick = async (value) => {
    setDisplayState(value);
  };

  const displayManager = () => {
    if (displayState === "greet")
      return <WelcomeToDashBoard name={userGlobalData.firstName} />;
    else if (displayState === "calender") return <EventList />;
    return <PostAtrip />;
  };


  return (
    <PageStyle backGroundImage={Bubbles}>

      <NavBar />

      <DashBoardContainer>
      {displayManager()}
        <MainDivDashBoardStyle>
          <FlexBoxStyledComponent width="90%" justifyContent="space-around">
            <Button
              onClick={() => {
                handleClick("calender");
              }}
              margin="1rem"
              width="15rem"
            >
              find me a buddy!
            </Button>
            <Button
              onClick={() => {
                handleClick("postAtrip");
              }}
              margin="1rem"
              width="15rem"
            >
              Post A trip
            </Button>
            <Button
            onClick={() => {
              handleClick("greet");
            }}
            margin="1rem"
            width="15rem"
          >
            {" "}
            go back
          </Button>
          </FlexBoxStyledComponent>
        </MainDivDashBoardStyle> 
      </DashBoardContainer>
    </PageStyle>
  );
};

export default MainPage;



