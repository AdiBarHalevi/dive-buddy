import React, { useEffect, useState } from "react";
import { MainDivDashBoardStyle,Td,Tr,Table } from "./MainPageStyle";
import { getEvents } from "../AxiosCall";


const EventList = () => {
  const [listDataState, setListDataState] = useState([]);

  const  fecthList = async()=>{
    const localList = sessionStorage.getItem("events")
    if(!localList){
      const eventList = await getEvents();
      sessionStorage.setItem("events",JSON.stringify(eventList.ans))
      return setListDataState(eventList.ans);
    }
    return setListDataState(JSON.parse(localList));
    
  }

  useEffect(() => {
    fecthList();
  }, []);

  return (
    <MainDivDashBoardStyle>
      <Table>
        <thead>
          <Tr>
            <Td>date</Td>
            <Td>Location</Td>
            <Td>participents</Td>
          </Tr>
        </thead>
        <tbody>
          {listDataState.map((event, i) => {
            return (
            <Tr key={i}>
                <Td>{event.date}</Td>
                <Td>{event.location}</Td>
                <Td>{event.participents.length}</Td>
            </Tr>
            )
          })}
        </tbody>
      </Table>
    </MainDivDashBoardStyle>
  );
};

export default EventList;
