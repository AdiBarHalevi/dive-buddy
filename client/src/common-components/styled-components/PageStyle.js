import styled from "styled-components";

const PageStyle = styled.div`
  border: 1px solid black;
  height: 93.8vh;
  display: flex;
  justify-content: center;
  background: transparent;
  align-items: center;
  position: relative;
  background: #53ccec;
  &:before {
    content: "";
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${(props) => props.backGround});
    opacity: 0.2;
    background-position: center;
    background-size: cover;
  }
`;
export default PageStyle;
