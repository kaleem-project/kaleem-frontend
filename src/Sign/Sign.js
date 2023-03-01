import React, {Component} from 'react';
import Axios from 'axios';
import {SHA3} from 'sha3';
import classes from './Sign.css';
import SignUpOne from './SignUpOne/SignUpOne';
import SignIn from './SignIn/SignIn';

class Sign extends Component {
  state = {
    user: {
      email: '',
      firstName: '',
      username: '',
      lastName: '',
      password: '',
      type: '',
    },

    // Sign In Appear
    signIn: false,

    // Sign errors
    emptyField: ['', '', '', '', '', '', ''],
    emptyNum: 0,
  };

  updateUserState = (id, input) => {
    this.setState((prevState) => {
      let user = {...prevState.user};
      user[id] = input;
      return {user};
    });
  };

  setInput = (event, id) => {
    const input = event.target.value;
    if (id === 'password') {
      const hash = new SHA3(512);
      hash.update(input);
      this.updateUserState(id, hash.digest('hex'));
      return;
    }
    this.updateUserState(id, input);
  };

  render() {
    const handleEmptyFields = () => {
      const emptyField = this.state.emptyField;
      const user = this.state.user;
      const fields = ['firstName', 'lastName', 'username', 'email', 'password'];

      fields.map((field, index) => {
        if (user[field] === '') {
          if (field === 'type') {
            emptyField[index] = `Please Choose one`;
          } else {
            emptyField[index] = `Please enter ${field}`;
          }
        }

        if (user[field] !== '' && field !== 'email' && field !== 'password') {
          emptyField[index] = '';
        }
        return 'Check over';
      });

      this.setState({emptyField});
    };

    const renderErrorIcon = (id) => {
      const user = this.state.user;

      if (this.state.startCheck) {
        return user[id];
      } else return null;
    };

    const HandleSignIn = () => {
      this.setState({signIn: !this.state.signIn});
    };

    const renderSignControler = (event, page) => {
      const fields = this.state.emptyField;
      handleEmptyFields();

      const empty = fields.reduce((acc, curfield) => {
        return curfield === '' ? acc + 1 : acc + 0;
      }, 0);

      // set number of empty fields if === 0 no field empty
      // use normal animation
      // if not 0 use edited animation
      this.setState({emptyNum: empty, startCheck: true});

      if (empty === 5) {
        console.log('Clicked');
        Axios.post('http://192.168.1.12:8080/api/v3/database/accounts', {
          // prettier-ignore
          user: this.state.user,
        })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      }
    };

    return (
      <div>
        <div className={classes.container}>
          <div>
            <div className={classes.logoContainer}>
              <img
                className={classes.logo}
                src={require('../assets/Logo/logoWhite.svg')}
                alt="Kaleem logo"
              />
              <div className={classes.kaleem}>KALEEM</div>
            </div>
            <div className={classes.signText}>Sign in or create an account</div>
          </div>

          <SignUpOne
            renderSignControler={renderSignControler}
            setInput={this.setInput}
            renderErrorIcon={renderErrorIcon}
            emptyField={this.state.emptyField}
            startCheck={this.state.startCheck}
            passLength={this.state.user['password'].length}
            signInAppear={HandleSignIn}
            signIn={this.state.signIn}
            email={this.state.user['email']}
            username={this.state.user['username']}
          />

          <SignIn disappear={HandleSignIn} signIn={this.state.signIn} />
        </div>
      </div>
    );
  }
}

export default Sign;
