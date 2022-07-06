import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
          <form>
              <input type=""/>
              <button> Send</button>
          </form>


          <ul>
            <li>Name :{this.props.name}</li>
            <li>Surname:{this.props.department}</li>
            <li>Salary: {this.props.salary} </li>

          </ul>
      </div>
    )
  }
}


export default User