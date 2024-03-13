import { type } from 'os'
import React from 'react'
type PersonProps = {
    name: {
        first: string
        last: string
    }
}

const Person = (props: PersonProps) => {
  return (
    <h2>{props.name.first} {props.name.last} </h2>
  )
}

export default Person