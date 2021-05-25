import { HeaderStyle, IconStyle, LiStyle, UlStyle } from "./HeaderStyle";
import {StyledLink} from "../common-components/styled-components/UtiltyComps"

const NavBar = () =>  (
    <HeaderStyle>
      <UlStyle>
        <LiStyle>
          <StyledLink color="white" to="/" >
            <IconStyle>HOME</IconStyle>
          </StyledLink>
        </LiStyle>

        <LiStyle>
          <StyledLink color="white" to="/login">
            <IconStyle>Login</IconStyle>
          </StyledLink>
        </LiStyle>
      </UlStyle>
    </HeaderStyle>
  );

export default NavBar;