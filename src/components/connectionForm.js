import React from 'react';
import { connect } from "react-redux";
import { connectUser } from '../actions/actions'
import { User } from '../user'

const mapDispatchToProps = dispatch => {
  return {
    connectUser: user => dispatch(connectUser(user))
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

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

    connectionUser = () => {
        //faire en sorte que le state de l'appli ai un user et que app.js renvoie
        //la page de connection ou la page de l'utilisateur connecté celon ce state
        let user = new User(this.state.login, this.state.password);
        this.props.connectUser(user);
    }

    deconnectionUser = () => {
      this.props.connectUser(undefined);
    }
  
    render() {
      if(this.props.user!==undefined){
        return <div><p>Bonjour, {this.state.login}</p><button onClick={this.deconnectionUser.bind(this)}>logout</button></div>
      }else{
        return (
          <div>
          <label>
            <input type="text" placeholder="login" onChange={this.handleChangeLogin.bind(this)} />
          </label>
          <label>
            <input type="password" placeholder="password" onChange={this.handleChangePassword.bind(this)} />
          </label>
          <button onClick={this.connectionUser.bind(this)}>login</button></div>
        );
      }
    }
}

const ConnectedConnectionForm = connect(mapStateToProps, mapDispatchToProps)(ConnectionForm);

export {
  ConnectedConnectionForm
}
