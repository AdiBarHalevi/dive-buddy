import React from "react"
import PageStyle from "../common-components/styled-components/PageStyle"
import { InteractionCard } from "../common-components/styled-components/UtiltyComps"
import LoneDiver from "../img/lonediver.gif"
import SingInForm from "./SignInForm"


const SignIn = ()=>{
    return (
    <PageStyle backGroundImage={LoneDiver} backGroundColor = "#003935"> 
        <InteractionCard>
            <SingInForm/>
        </InteractionCard>
    </PageStyle>
    )
}
export default SignIn