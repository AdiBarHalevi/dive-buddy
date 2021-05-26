import React, { useEffect, useState } from "react";
import { MainDivDashBoardStyle,Td,Tr,Table } from "./MainPageStyle";
import { getEvents } from "../AxiosCall";


const EventList = () => {
  const [listDataState, setListDataState] = useState([]);

  const  fecthList = async()=>{
    const eventList = await getEvents();
    setListDataState(eventList.ans);
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
