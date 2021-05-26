import styled from "styled-components";

export const MainDivDashBoardStyle = styled.div`
  z-index: 1;
  font-size: 3rem;
  display: flex;
  width: 100%;
  justify-content:center;
  align-items:center;
  
`;

export const DashBoardContainer = styled.div`
color:${(props) => props.theme.colors.fontColor};
display:flex;
flex-direction:column;
justify-content:center;
aligh-items:center;
text-align: center;
border:1px solid white;
z-index:1;
position;relative;
width:90%;
height:90%;
&:after{
    content:"";
    top:5%;
    left:5%;
    background:white;
    opacity:0.9;
    filter: blur(8px);
    width:90%;
    height:90%;
    position:absolute;
}
`;

export const Td = styled.td`
    font-size:22px;
    text-align:center;
    display:block;
    width:33%;

`

export const Tr = styled.tr`
  text-align:center;
  border-bottom: 1px solid;
  display:flex;
  width:100%;
  justify-content:space-evenly;
  &:hover{
    background:#042139;
    color:white;
    cursor:pointer;
  }

`


export const Table = styled.table`
  margin-bottom:32px;
  width:70%;
  
  
  

`


  // &:hover~&:after{
  //   content:"${(props)=>props.participents}? click to learn more";
  //   width:12rem;
  //   height:6rem;
  //   background:#042139;
  //   color:white;
  //   font-size:20px;
  //   top:0;
  //   position:absolute;
  // }