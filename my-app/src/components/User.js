import React, { Component } from 'react'

class User extends Component {
  render() {

    //Destructing
    const {name,department,salary}=this.props;
    return (
      <div>
          <form>
              <input type=""/>
              <button> Send</button>
          </form>

{/* 
          <ul>
            <li>Name :{this.props.name}</li>
            <li>Surname:{this.props.department}</li>
            <li>Salary: {this.props.salary} </li>

          </ul> */}

          <ul>
            <li>Name :{name}</li>
            <li>Surname:{department}</li>
            <li>Salary: {salary} </li>

          </ul>



          User.propTypes={
            
          }
      </div>
    )
  }
}


export default User