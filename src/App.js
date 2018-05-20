import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyAZsdZGNIM6MrU8dM0VUNdiRC-czGUY5c0',
        authDomain: 'authentication-ddc5c.firebaseapp.com',
        databaseURL: 'https://authentication-ddc5c.firebaseio.com',
        projectId: 'authentication-ddc5',
        storageBucket: 'authentication-ddc5c.appspot.com',
        messagingSenderId: '778022821183'
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

    renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
    }

    render() {
      return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
      );
    }
}

export default App;
