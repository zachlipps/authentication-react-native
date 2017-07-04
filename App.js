import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import { Header, Button, Spinner } from './src/components/common';


export default class App extends
Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8cx5Cg6gIQYRsj1XNG-LXHRZU_zAAjfw',
      authDomain: 'authpractice-dd150.firebaseapp.com',
      databaseURL: 'https://authpractice-dd150.firebaseio.com',
      projectId: 'authpractice-dd150',
      storageBucket: 'authpractice-dd150.appspot.com',
      messagingSenderId: '14567537298',

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
        return (<Button onPress={() => firebase.auth().signOut()}>
          Log Out
          </Button>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }


  render() {
    return (
      <View >
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}
