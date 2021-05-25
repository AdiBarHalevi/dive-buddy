import React, { useRef, useState } from "react"
import SelectComp from "../common-components/SelectComp"
import { Button } from "../common-components/styled-components/UtiltyComps"
import {genAnewUser} from "../AxiosCall"
import {Form,InputStyle} from "../common-components/styled-components/Form.style"


const SingInForm = ()=>{
    const [diverSkillLevelState,setDiverSkillLevelState] = useState("begginer")

    const divingSkills = ["begginer","experienced","very experienced","proffesional"]
    
    const firstNameRef = useRef(undefined)
    const lastNameRef = useRef(undefined)
    const dateOfBirthRef = useRef(undefined)
    const emailRef = useRef(undefined)

    const handleClick =(event)=>{
        event.preventDefault()
        const newUser = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            dateOfBirth:dateOfBirthRef.current.value,
            email:emailRef.current.value,
            skillLevel:diverSkillLevelState
        }
         genAnewUser(newUser)

    }

    return (
    <Form height="80%" onSubmit={handleClick}>
        <label>First name </label><InputStyle type= "text" ref={firstNameRef} required></InputStyle>
        <label>Last name </label><InputStyle type= "text" ref={lastNameRef} required></InputStyle>
        <label>Date of birth </label><InputStyle type= "date" ref={dateOfBirthRef} required></InputStyle>
        <label> Email </label><InputStyle type= "email" ref={emailRef}></InputStyle>
        <label>Rate your diving</label>
        <SelectComp 
            divingSkills={divingSkills}
            setDiverSkillLevelState={setDiverSkillLevelState}/>
        <Button type="submit" margin="1.5rem">Submit</Button>
    </Form>)
}

export default SingInForm



