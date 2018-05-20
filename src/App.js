import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyAZsdZGNIM6MrU8dM0VUNdiRC-czGUY5c0',
        authDomain: 'authentication-ddc5c.firebaseapp.com',
        databaseURL: 'https://authentication-ddc5c.firebaseio.com',
        projectId: 'authentication-ddc5',
        storageBucket: 'authentication-ddc5c.appspot.com',
        messagingSenderId: '778022821183'
      });
    }

    render() {
      return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
      );
    }
}

export default App;
