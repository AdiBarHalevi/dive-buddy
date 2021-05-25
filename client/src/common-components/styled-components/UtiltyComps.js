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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
`;
