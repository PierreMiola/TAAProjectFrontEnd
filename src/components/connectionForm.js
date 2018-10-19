import React, { Component } from 'react';
import { connect } from "react-redux";

class ConnectionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { login: '', password: '' };
    }

    handleChangeLogin(event) {
        this.setState({login: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    connectUser = () => {
        //faire en sorte que le state de l'appli ai un user et que app.js renvoie
        //la page de connection ou la page de l'utilisateur connecté celon ce state
        console.log(this.state.login);
    }
  
    render() {
      return (
        <div>
        <label>
          <input type="text" placeholder="login" onChange={this.handleChangeLogin.bind(this)} />
        </label>
        <label>
          <input type="password" placeholder="password" onChange={this.handleChangePassword.bind(this)} />
        </label>
        <button onClick={this.connectUser.bind(this)}>CONNECTION</button></div>
      );
    }
}

export {
    ConnectionForm
}
