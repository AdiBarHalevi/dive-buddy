import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Button,
  FlexBoxStyledComponent,
} from "./styled-components/UtiltyComps";

const LinkButton = ({ label, destination, color, title }) => (
  <FlexBoxStyledComponent flexDirection="column">
    {label && <Label> {label}</Label>}
    <Button>
      <StyledLink to={destination} color={color}>
        {title}
      </StyledLink>
    </Button>
  </FlexBoxStyledComponent>
);

export default LinkButton;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
`;

const Label = styled.label`
  text-align: center;
  font-size: 18px;
`;
