import React, { useState } from "react"
import styled from "styled-components"
import SelectComp from "../common-components/SelectComp"
import { Button } from "../common-components/styled-components/UtiltyComps"


const SingInForm = ()=>{
    const [userDetailsState,setUserDetailsState] = useState({
    })
    const [diverSkillLevelState,setDiverSkillLevelState] = useState("")

    const divingSkills = ["begginer","experienced","very experienced","proffesional"]
    

    return (
    <Form>
        <LabelStyle>First name </LabelStyle><InputStyle type= "text"></InputStyle>
        <LabelStyle>Last name </LabelStyle><InputStyle type= "text"></InputStyle>
        <LabelStyle>Date of birth </LabelStyle><InputStyle type= "date"></InputStyle>
        <LabelStyle>Rate your diving</LabelStyle>
        <SelectComp 
        divingSkills={divingSkills}
        setDiverSkillLevelState={setDiverSkillLevelState}/>
        <Button>Submit</Button>
    </Form>)
}

export default SingInForm

const Form = styled.div`
    height:80%;
    width:60%;
    background:grey;
    display:flex;
    flex-direction:column;
    padding:1rem;
`

const LabelStyle = styled.label`
`

const InputStyle = styled.input`
    width:70%;
` 