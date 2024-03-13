import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  //optinal props with ? and default value
  const {messageCount = 0} = props
  return (
    <>
      <h2>
        {props.isLoggedIn
          ? `welcome ${props.name}! you have ${messageCount} undear message`
          : 'Welcome Guest!'}
      </h2>
    </>
  );
};

export default Greet;
