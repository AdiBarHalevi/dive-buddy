import styled from "styled-components";
import { Link } from "react-router-dom";


export const FlexBoxStyledComponent = styled.div`
    display:flex;
    justify-content:${(props) => props.justifyContent};
    align-items:${(props) => props.alignItems};
    flex-direction:${(props) => props.flexDirection};
    width:${(props) => props.width}
    height:${(props) => props.height}
    z-index:1;
`;


export const Button = styled.button`
  color: white;
  background: #1974d3;
  cursor: pointer;
  border-radius: 12px;
  font-size: 18px;
  padding: 6px;
  &:hover {
    background: rgb(25, 93, 211);
  }
`;

//TODO : Move to common interface for styled components file

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
`;

export const InteractionCard = styled.div`
  border: 8px solid ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 60vh;
  background-color: rgb(255, 255, 255, 0.9);
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  border-radius: 6rem;
  box-shadow:  ${props => props.theme.boxShadows.regular};
  `