import React, { useRef } from "react"
import { Button } from "../common-components/styled-components/UtiltyComps"

import {loginUser} from "../AxiosCall"
import {Form,InputStyle} from "../common-components/styled-components/Form.style"


const SingInForm = ()=>{

    const passwordRef = useRef(undefined)
    const emailRef = useRef(undefined)

    const handleClick =(event)=>{
        event.preventDefault()
        const user = {
            password: passwordRef.current.value,
            email:emailRef.current.value,
        }
        loginUser(user)
    }

    return (
    <Form onSubmit={handleClick} height="65%">
        <h2>Login</h2>
        <label>password </label><InputStyle type= "text" ref={passwordRef} required></InputStyle>
        <label> Email </label><InputStyle type= "email" ref={emailRef}></InputStyle>
        <Button type="submit" margin="1.5rem">Submit</Button>
    </Form>)
}

export default SingInForm
