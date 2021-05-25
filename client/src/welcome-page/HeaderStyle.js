import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: #000169;
  display: flex;
  justify-content: center;
  height: 6vh;
`;

export const UlStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  width: 90%;
  margin: 0 10px;
`;

export const LiStyle = styled.li`
  list-style: none;
  padding: 0 10px;
  color: #ffffff;
  font-size: medium;
  &:hover {
    color: #ffffff;
    filter: invert(20%);
    cursor: pointer;
  }
`;
export const IconStyle = styled.span`
  list-style: none;
  padding: 0 10px;
  color: #ffffff;
  font-size: medium;
  text-decoration: none;
  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
