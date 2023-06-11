import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    return this.state.isLoggedIn && <div>Hello ABiR</div>
    // return(
    //  this.state.isLoggedIn ?
    //  <div>Welcome Abir</div> :
    //  <div>Welcome Guest</div>
    // )
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome ABiR</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return (
    //     <div>{message}</div>
    // )
    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome ABiR
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome ABiR</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting