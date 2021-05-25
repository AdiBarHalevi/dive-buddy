import styled from "styled-components";
import { FlexBoxStyledComponent } from "./UtiltyComps";

const PageStyle = styled(FlexBoxStyledComponent)`
  border: 1px solid black;
  height: calc(100vh - 3rem);
  display: flex;
  justify-content: center;
  // background: transparent;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${(props) => props.backGroundImage});
    opacity: 1;
    background-position: center;
    background-size: cover;
  }
`;
export default PageStyle;
