import React, { useRef } from "react";
import { MainDivDashBoardStyle } from "./MainPageStyle";
import { PostEvent } from "../AxiosCall";
import {
  Form,
  InputStyle,
} from "../common-components/styled-components/Form.style";
import {
  Button,
  FlexBoxStyledComponent,
} from "../common-components/styled-components/UtiltyComps";

const PostAtrip = () => {
  const dateRef = useRef("");
  const locationRef = useRef("");
  const peopleRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      date: dateRef.current.value,
      location: locationRef.current.value,
      participents: peopleRef.current.value.split(","),
    };
    PostEvent(body);
  };

  return (
    <MainDivDashBoardStyle>
      <FlexBoxStyledComponent justifyContent="center" flexDirection="row">
        <Form onSubmit={handleSubmit} >
          <label>choose a date</label>
          <InputStyle type="date" width="100%" ref={dateRef} required />
          <label>choose a place</label>
          <InputStyle type="text" width="100%" ref={locationRef} required />
          <label>who's joining you?</label>
          <InputStyle type="text" width="100%" ref={peopleRef} required />
          <Button type="submit" margin=" 1rem 5rem 1rem 0" width="11rem">
            SUBMIT
          </Button>
        </Form>
      </FlexBoxStyledComponent>
      post a trip
    </MainDivDashBoardStyle>
  );
};

export default PostAtrip;
