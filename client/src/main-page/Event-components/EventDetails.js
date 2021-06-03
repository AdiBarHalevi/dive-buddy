import React from "react"

import Bubbles from "../../img/bubblesGif.gif"

import MapComponent from "./MapComponent"

import PageStyle from "../../common-components/styled-components/PageStyle"
import { DashBoardContainer, MainDivDashBoardStyle, Table, Td, Tr } from "../MainPageStyle"
import { Button } from "../../common-components/styled-components/UtiltyComps"

import { userGlobalDataState } from "../../globals/atoms"
import {joinAnEvent} from "../../AxiosCall"
import { useRecoilValue } from "recoil"




const EventDetails = (props)=>{
    
    const userGlobalData = useRecoilValue(userGlobalDataState);
    const data = props.location.state
    
    const joinAtrip = ()=>{
    if(window.confirm("are you sure you wish to join the trip"))
        joinAnEvent(userGlobalData,data)
    }

    return (
    
    <PageStyle backGroundImage={Bubbles}>
     
        <DashBoardContainer style={{alignItems:"center"}}>
            <MainDivDashBoardStyle>
               
                <Table>
                    <tbody>
                        <Tr>
                            <Td>
                                dive trip date
                            </Td>
                            <Td>
                                {data.date}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Trip departs from
                            </Td>
                            <Td>
                                {data.location}
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                participents
                            </Td>
                            <Td>
                                {data.participents.map((person,i)=>{
                                    return <span key={i}>{person}</span>
                                })}
                            </Td>
                        </Tr>
                    </tbody>
                </Table>
                          
            </MainDivDashBoardStyle>
            <MapComponent coardinates={props.location.GPSlocation}/>  
            
            <Button onClick={joinAtrip}>join the trip</Button>

    
        </DashBoardContainer>
    </PageStyle>)
}

export default EventDetails