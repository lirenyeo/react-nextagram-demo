import React from 'react'

function MyButton(props) {
  return (
    <button
      style={{
        background: 'red',
        color: 'white'
      }}
    >
      { props.children }
    </button>
  )
}

export default MyButton
