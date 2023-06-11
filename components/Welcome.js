import React, { Component } from 'react'

export class Welcome extends Component {
    render() { 
        const {age, name} = this.props
        return <h1>Class Component{name} age {age}</h1>
    }
}

//export default Welcome