import {
  HeaderStyle,
  IconStyle,
  LiStyle,
  UlStyle,
} from "../welcome-page/HeaderStyle";
import { StyledLink } from "../common-components/styled-components/UtiltyComps";

const NavBar = () => (
  <HeaderStyle>
    <UlStyle>
      <LiStyle>
        <StyledLink color="white" to="/">
          <IconStyle>LOGOUT</IconStyle>
        </StyledLink>
      </LiStyle>

      <LiStyle>
        <StyledLink color="white" to="/">
          <IconStyle>MSG</IconStyle>
        </StyledLink>
      </LiStyle>
    </UlStyle>
  </HeaderStyle>
);

export default NavBar;
