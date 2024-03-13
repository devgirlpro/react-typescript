import React from 'react'
type BUttonProps = {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: BUttonProps) => {
  return (
    <button onClick={(event) =>props.clickHandler(event, 1)} >Click</button>
  )
}

export default Button