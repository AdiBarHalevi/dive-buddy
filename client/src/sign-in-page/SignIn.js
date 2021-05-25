import React from "react"
import PageStyle from "../common-components/styled-components/PageStyle"
import { InteractionCard } from "../common-components/styled-components/UtiltyComps"
import LoneDiver from "../img/lonediver.gif"
import SingInForm from "./SignInForm"


const SignIn = ()=>{
    return (
    <PageStyle backGroundImage={LoneDiver}> 
        <InteractionCard>
            <h2>Sign Up</h2>
            <SingInForm/>
        </InteractionCard>
    </PageStyle>
    )
}
export default SignIn