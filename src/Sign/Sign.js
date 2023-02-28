import React, {Component} from 'react';
import Axios from 'axios';
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
    if (id === 'type') {
      if (event.target.value == 1) this.updateUserState(id, 'Deaf');
      else if (event.target.value == 2) this.updateUserState(id, 'Non-Deaf');
    } else {
      this.updateUserState(id, input);
    }
  };

  // submit = (e) => {
  //   e.preventDefault();
  //   Axios.post('http://127.0.0.1:5000/api/v3/signup', {
  //     // prettier-ignore
  //     'first': this.state.firstName,
  //     // prettier-ignore
  //     'sur': this.state.lastName,
  //     // prettier-ignore
  //     'user': this.state.username,
  //     // prettier-ignore
  //     'email': this.state.email,
  //     // prettier-ignore
  //     'password': this.state.password,
  //     // prettier-ignore
  //     'type': this.state.type,
  //     // prettier-ignore
  //     'bio': this.state.bio,
  //     // prettier-ignore
  //     'facebookLink': this.state.facebookLink,
  //     // prettier-ignore
  //     'twitterLink': this.state.twitterLink,
  //     // prettier-ignore
  //     'githubLink': this.state.githubLink,
  //     // prettier-ignore
  //     'youtubeLink': this.state.youtubeLink,
  //     // prettier-ignore
  //     'linkedinLink': this.state.linkedinLink,
  //   })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };

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

      if (page === 'SignInAppear') {
        this.state.signUpOne === 'formEmpty'
          ? this.setState({signUpOne: 'formUp', signIn: 'formEmpty'})
          : this.setState({signUpOne: 'formUp', signIn: 'formAppear'});
      }

      if (page === 'SignUpTwo') {
        handleEmptyFields();

        const empty = fields.reduce((acc, curfield) => {
          return curfield === '' ? acc + 1 : acc + 0;
        }, 0);

        // set number of empty fields if === 0 no field empty
        // use normal animation
        // if not 0 use edited animation
        this.setState({emptyNum: empty, startCheck: true});

        // console.log(this.state.emptyNum, empty);

        empty === 5
          ? this.setState({signUpOne: 'formDown', signUpTwo: 'formAppear'})
          : this.setState({signUpOne: 'formEmpty'});
      }

      if (page === 'SignUpOne') {
        this.state.emptyNum !== 5
          ? this.setState({signIn: 'form', signUpOne: 'formEmpty'})
          : this.setState({signIn: 'form', signUpOne: 'form'});
      }

      if (page === 'SignUpToOne') {
        this.submit(event);
      }

      if (page === 'BackToOne') {
        this.state.emptyNum !== 5
          ? this.setState({signUpOne: 'formEmpty', signUpTwo: 'form'})
          : this.setState({signUpOne: 'form', signUpTwo: 'form'});
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
          />

          <SignIn disappear={HandleSignIn} signIn={this.state.signIn} />
        </div>
      </div>
    );
  }
}

export default Sign;
