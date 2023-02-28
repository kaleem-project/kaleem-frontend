import React, {Component} from 'react';
import classes from '../Chat/Chat.css';
import Nav from './Nav/Nav';
import SettingsList from './SettingsList/SettingsList';
import {getFriends} from '../services/friendsService';
import SettingView from './SettingView/SettingView';

class Chat extends Component {
  state = {
    friends: getFriends(),
    displayGuidanceMessage: false, // control select message
    count: 0, // control hover for each friend
    messageOpacity: 'messagesOpacity', // control chat opacity
    settingName: 'Meeting', // click index
    indexHover: 0,
    sendButton: 'sendIcon',

    drawerToggle: true,
  };

  // mouse over
  onMouseChatOver = (indexHover) => {
    if (this.state.count === 0) {
      this.setState({
        count: 1,
        displayGuidanceMessage: true, // control message opacity
        indexHover, // store index of person in indexHover to display it in semi hover effect
        messageOpacity: 'messages',
      });
    }
  };

  // mouse out
  onMouseChatLeave = () => {
    if (this.state.count === 1) {
      this.setState({
        count: 0,
        imageReplace: false,
        displayGuidanceMessage: false,
        messageOpacity: 'messagesOpacity',
      });
    }
  };

  settingClickedHandler = (name) => {
    console.log('Hello');
    this.setState({
      // count: 2,
      // messageOpacity: 'messagesClear',
      settingName: name,
    });
  };

  drawerToggleHandler = () => {
    this.setState({drawerToggle: !this.state.drawerToggle});
  };

  render() {
    const opa = this.state.messageOpacity;
    let {clickedChatIndex, indexHover} = this.state;

    const chatHiddenEffect = () => {
      if (clickedChatIndex === null) return indexHover;
      return clickedChatIndex;
    };
    const friend = this.state.friends[parseInt(chatHiddenEffect())];

    const onChangeSendIcon = (event) => {
      event.target.value === ''
        ? this.setState({sendButton: 'sendIcon'})
        : this.setState({sendButton: 'sendIconChange'});
    };

    const infoBlockTextOver = () => {
      const hover = this.state.controlBlockHover;
      if (!hover) {
        this.setState({controlBlockHover: true});
      }
    };

    const infoBlockTextLeave = () => {
      const hover = this.state.controlBlockHover;
      if (hover) {
        this.setState({controlBlockHover: false});
      }
    };

    return (
      <div className={classes.container}>
        <Nav toggle={this.drawerToggleHandler} />

        <SettingsList
          friends={this.state.friends}
          onMouseOver={this.onMouseChatOver}
          onMouseLeave={this.onMouseChatLeave}
          settingClicked={this.settingClickedHandler}
          settingName={this.state.settingName}
          appear={this.state.drawerToggle}
          toggle={this.drawerToggleHandler}
        />

        <SettingView toggle={this.state.drawerToggle} />

        <img
          className={classes.mettingDraw}
          src={require(`../assets/Images/mettingDraw.png`)}
          alt="Profile Image"
        />
      </div>
    );
  }
}

export default Chat;

{
  /* <ChatInfo
          friend={friend}
          chatHiddenEffect={chatHiddenEffect}
          infoBlockTextOver={infoBlockTextOver}
          infoBlockTextLeave={infoBlockTextLeave}
          controlBlockHover={this.state.controlBlockHover}
        /> */
}
