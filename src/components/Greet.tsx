import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      <h2>
        {props.isLoggedIn
          ? `welcome ${props.name}! you have ${props.messageCount} undear message`
          : 'Welcome Guest!'}
      </h2>
    </>
  );
};

export default Greet;
