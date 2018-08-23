import './main.html';
import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import NavBar from './../imports/ui/NavBar';
import Footer from './../imports/ui/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <Footer />
      </div>
    );
  }
}

Meteor.startup(function () {
  ReactDOM.render(<App />, document.getElementById('app'));
})
