import React, { Component } from 'react';
import './Register.scss';
import firebase from '../../../config/firebase';

class Register extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChangeText = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
      console.log('success: ', res);
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const newItem = {
  //     id: Date.now(),
  //     title: this.state.item,
  //     completed: false,
  //   };

  //   const updatedItems = [newItem, ...this.state.items];

  //   this.setState({
  //     items: updatedItems,
  //     item: "",
  //     id: 0,
  //     editStatus: false
  //   });

  // };

  render() {
    return (
      <div>

        <div className="auth-card">
          <p>Register Page</p>

          <form onSubmit={this.handleSubmit}>
            <input type="email" id="email" placeholder="email" onChange={this.handleChangeText} /> <br />
            <input type="password" id="password" placeholder="password" onChange={this.handleChangeText} /> <br />

            <button className="btn">Register</button>
          </form>
        </div>

      </div >
    );
  }
}

export default Register;
