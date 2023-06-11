import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
        {id:'1',
        name:'a',
        age:'aw',
        skill:'ae'},

        {id:'2',
        name:'bt',
        age:'bg',
        skill:'bd'},

        {id:'3',
        name:'wc',
        age:'dc',
        skill:'sc'}
    ]
    const nameList = persons.map((person, index) => <Person key={index} person = {person}/>)
    
  return (
    <div> {nameList} </div>
  )
}

export default NameList