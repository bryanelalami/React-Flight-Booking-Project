import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { Navbar, Nav } from 'react-bootstrap';


// Countdown
import Countdown from './Components/Countdown';
import './css/Countdown.css';

// Booking form
import BookingForm from './Components/BookingForm';
import './css/BookingForm.css';
import "./css/AddPassenger.css";

//Chatbot
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './css/chatbot.css';






class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    
    const handleNewUserMessage = (newMessage) => {
      console.log(`New message incoming! ${newMessage}`);
      // Now send the message throught the backend API
      };

    

    return (
      <div className="App">
        <div className="">
          <Countdown className="bg-color" date={`${year}-07-04T00:00:00`} />
        </div>

        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">2UrTrip</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="px-4">Home</Nav.Link>
              <Nav.Link href="#link" className="px-4">Vols</Nav.Link>
              <Nav.Link href="#link" className="px-4">Hotels</Nav.Link>
              <Nav.Link href="#link" className="px-4">Voitures</Nav.Link>
              <Nav.Link href="#link" className="px-4">Vacances</Nav.Link>
              <Nav.Link href="#link" className="px-4">Explore</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="bg">
          <BookingForm />
        </div>
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Une question ?"
          subtitle="Votre agent est là pour vous répondre"
          senderPlaceHolder="Posez votre question..."
        />
      </div>
    );
  }
}

export default App;
