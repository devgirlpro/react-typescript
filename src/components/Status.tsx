import React from 'react'
//status can be only one of them and if writen any other string will tell us
type StatusProps = {
    status: 'loading' | 'success' | 'error'
}


const Status = (props: StatusProps) => {
    let message 
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully'
    } else if (props.status === 'error') {
        message = 'OooPs!!!Error fetching data'
    }
  return (
    <div>
        <h2>Status _ {message}</h2>
    </div>
  )
}

export default Status