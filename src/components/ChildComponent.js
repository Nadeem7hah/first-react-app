import React from 'react'

const ChildComponent = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
