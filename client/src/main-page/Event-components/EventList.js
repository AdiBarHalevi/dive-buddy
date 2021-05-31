import React, { useEffect, useState } from "react";
import { MainDivDashBoardStyle,Td,Tr,Table } from "../MainPageStyle";
import { findLocationAPI, getEvents } from "../../AxiosCall";
import history from "../../globals/history"



const EventList = () => {

  const [listDataState, setListDataState] = useState([]);

  const requestLocation = async (event)=>{
    const location  = await findLocationAPI(event)
    return location.data.features[0].center
}

  const  fecthList = async()=>{
    const localList = sessionStorage.getItem("events")
    if(!localList){
      const eventList = await getEvents();
      sessionStorage.setItem("events",JSON.stringify(eventList.ans))
      return setListDataState(eventList.ans);
    }
    return setListDataState(JSON.parse(localList));
    
  }

  const showEvent =async (i,event)=>{
    const locationData = await requestLocation(event)
    history.push({
      pathname:`/dashBoard/event-list`,
      search:`${i}`,
      state:listDataState[i],
      GPSlocation:locationData
    })
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
            <Tr key={i} onClick={()=>showEvent(i,event.location)}>
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
