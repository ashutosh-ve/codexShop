import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner 
        animation='border'
        role='status'
        aria-label='Loading'
        style={{
            width:  "100px",
            height: "100px",
            margin: "auto",
            display: "block",
        }}
    />
  )
}

export default Loader