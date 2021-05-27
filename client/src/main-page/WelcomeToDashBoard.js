import React from "react";
import { MainDivDashBoardStyle } from "./MainPageStyle";

const WelcomeToDashBoard = ( {name} ) => {
  return (
    <MainDivDashBoardStyle>
      <p>
        hi {name}<br />
        what would you like to do?{" "}
      </p>
    </MainDivDashBoardStyle>
  );
};

export default WelcomeToDashBoard;
