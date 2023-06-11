import React from 'react'

function Person({person, index}) {
  return (
    <div>
    <h1 >I am {person.name}. I am {person.age}.
        I am {person.skill}</h1>
    </div>
  )
}

export default Person