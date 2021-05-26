import React, { useRef, useState } from "react";
import { Button } from "../common-components/styled-components/UtiltyComps";

import { loginUser } from "../AxiosCall";
import {
  Form,
  InputStyle,
} from "../common-components/styled-components/Form.style";

import history from "../globals/history";

const SingInForm = () => {
  const [errorMsgState, setErrorMsgState] = useState(false);
  const passwordRef = useRef(undefined);
  const emailRef = useRef(undefined);

  const handleClick = async (event) => {
    event.preventDefault();
    const user = {
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    const loginResponse = await loginUser(user);
    if (loginResponse === undefined) return setErrorMsgState(true);
    history.push("/dashBoard");
  };

  return (
    <Form onSubmit={handleClick} height="100%">
      <h2>Login</h2>
      {errorMsgState && "something went wrong,try again"}
      <label>password </label>
      <InputStyle type="text" ref={passwordRef} required></InputStyle>
      <label> Email </label>
      <InputStyle type="email" ref={emailRef}></InputStyle>
      <Button type="submit" margin="1.5rem">
        Submit
      </Button>
    </Form>
  );
};

export default SingInForm;
