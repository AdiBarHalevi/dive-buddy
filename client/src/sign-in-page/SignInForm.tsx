import React from "react"
import styled from "styled-components"

const SingInForm = ()=>{
    return <Form>
        <LabelStyle>First name </LabelStyle><InputStyle type= "text"></InputStyle>
        <LabelStyle>Last name </LabelStyle><InputStyle type= "text"></InputStyle>
        <LabelStyle>Date of birth </LabelStyle><InputStyle type= "date"></InputStyle>
        <LabelStyle>Rate your diving</LabelStyle><select>
            
        </select>
    </Form>
}

export default SingInForm

const Form = styled.form`
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