import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
 type GreetProps = {
    name: string
}


const Greet = (props: GreetProps) => {
  return <h2>Welcome {props.name}! You have 10 unread message!</h2>;
};

export default Greet;
