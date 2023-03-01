import React, {Component} from 'react';
import classes from './Room.css';
import VideoMeeting from './VideoMeeting/VideoMeeting';
import MeetingControls from './MeetingControls/MeetingControls';
import ChatMessage from './ChatMessages/ChatMessages';
import TempProfile from './TempProfile/TempProfile';

import person1 from '../assets/ProfileImgs/2.jpg';
import person2 from '../assets/ProfileImgs/4.jpg';

class Room extends Component {
  state = {
    persons: [
      {
        Fname: 'Anjali',
        Lname: 'Sanchez',
        img: person1,
        message: 'Hi, Raj. How was your weekend?',
      },

      {
        Fname: 'Raj',
        Lname: 'Garcia',
        img: person2,
        message: 'Hey, Anjali. My weekend was great. I watched a great movie.',
      },

      {
        Fname: 'Dani',
        Lname: 'Jose',
        img: undefined,
        message:
          'Hey guys, I watched Avengers Endgame. It is the last movie of the Avengers.',
      },
    ],
    sendButton: 'sendIcon',
    focus: null,
    participants: false,
    chat: false,
    controls: false,

    controlHover: false,
  };

  onChangeSendIcon = (event) => {
    event.target.value === ''
      ? this.setState({sendButton: 'sendIcon'})
      : this.setState({sendButton: 'sendIconChange'});
  };

  personClickedHandler = (index) => {
    this.setState({focus: index});
  };

  toggleParticipantHandler = () => {
    this.setState({participants: !this.state.participants});
  };

  toggleChatHandler = () => {
    this.setState({chat: !this.state.chat});
  };

  toggleControlsHandler = () => {
    this.setState({controls: true});
  };

  onLeaveHandler = () => {
    this.setState({controls: false});
  };

  render() {
    const selectedPerson = this.state.persons[this.state.focus];
    let video = <p>Video</p>;
    if (this.state.focus !== null) {
      video = (
        <div className={classes.displayUser}>
          {selectedPerson.img === undefined ? (
            <div className={classes.noImg}>
              {selectedPerson.Fname.charAt(0) + selectedPerson.Lname.charAt(0)}
            </div>
          ) : (
            <TempProfile path={selectedPerson.img} />
          )}
          <span>{selectedPerson.Fname + ' ' + selectedPerson.Lname}</span>
        </div>
      );
    }
    return (
      <div
        className={
          this.state.chat ? classes.containerChanger : classes.container
        }
      >
        <div
          className={classes.meeting}
          onMouseOver={this.toggleControlsHandler}
          onMouseLeave={this.onLeaveHandler}
        >
          <VideoMeeting
            personClicked={this.personClickedHandler}
            focusEffect={this.state.focus}
            persons={this.state.persons}
            participants={this.state.participants}
            toggleParticipant={this.toggleParticipantHandler}
          />
          {video}
          <MeetingControls
            toggleParticipant={this.toggleParticipantHandler}
            toggleChat={this.toggleChatHandler}
            toggleControls={this.state.controls}
          />
          <div></div>
        </div>
        <div className={classes.chat}>
          <ChatMessage
            onChangeSendIcon={this.onChangeSendIcon}
            sendButton={this.state.sendButton}
            toggleChat={this.toggleChatHandler}
            persons={this.state.persons}
          />
        </div>
      </div>
    );
  }
}

export default Room;
