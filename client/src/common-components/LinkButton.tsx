import styled from "styled-components";
import { Link } from "react-router-dom";
import {Button, ColorProps} from "./styled-components/UtiltyComps"

const LinkButton = ({label, destination, color, title}: LinkButtonProps)=> (
      <>
        {label && 
        <Label> {label}</Label>
        }
        <Button>
          <StyledLink to={destination} color={color}>
          {title}
          </StyledLink>
        </Button>
      </>
  )


export default LinkButton

interface LinkButtonProps {
  label?:string; 
  destination:string;
  color:string;
  title:string;
}

const StyledLink = styled(Link)<ColorProps>`
  text-decoration: none;
  color: ${(props) => props.color};
`;

const Label = styled.label`
  text-align:center;
  font-size:18px;
`