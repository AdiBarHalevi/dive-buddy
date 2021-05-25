import styled from "styled-components";

import { FlexBoxStyledComponent } from "./UtiltyComps";

interface PageStyleProps {
  backGroundColor: string;
  backGroundImage: string;
}

const PageStyle = styled(FlexBoxStyledComponent)<PageStyleProps>`
  border: 1px solid black;
  height: calc(100vh - 3rem);
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props) => props.backGroundColor};
  &:before {
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${(props) => props.backGroundImage});
    opacity: 0.2;
    background-position: center;
    background-size: cover;
  }
`;

export default PageStyle;
