import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:"",
    description:"",
    agree:"",
    gender:"",
    agree:"",
  };
  
  inputName = (event) => {
    this.setState({
      name:event.target.value,
    });
  };

  inputDescription = (event) => {
    this.setState({
      description:event.target.value,
    });
  };

  chooseGender = (event) => {
    this.setState({
      gender : event.target.value,
    });
  };

  agree = (event) => {
    this.setState({
      agree : event.target.checked,
    })
  }

  handleSubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="myForm">
        <h1 className="topic">My Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="username">
            <label htmlFor="name">Name</label>
            <input type="text" value={this.state.name} onChange={this.inputName}></input>
          </div>
          
          <div className="gender">
            <label htmlFor="gender">Gender</label>
            <select onChange={this.chooseGender}>
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="description">
            <label htmlFor="description">Description</label>
            <textarea rows="10" cols="30" value={this.state.description} 
            onChange={this.inputDescription} placeholder="Description about yourself"></textarea>
          </div>

          <div className="agree">
            <input type="checkbox" name="agree" onClick={this.agree}></input>
            <label htmlFor="agree">I have read the terms of conduct.</label>
          </div>

          <div className="submit">
            <input type="submit" value="Submit" 
            disabled={!this.state.name  || !this.state.description || !this.state.gender || !this.state.agree}></input>
          </div>

        </form>
      </div>
      
    );
  }
}

export default MyProfile;


