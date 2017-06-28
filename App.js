import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import { Header } from './src/components/common';


export default class App extends
Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA8cx5Cg6gIQYRsj1XNG-LXHRZU_zAAjfw',
      authDomain: 'authpractice-dd150.firebaseapp.com',
      databaseURL: 'https://authpractice-dd150.firebaseio.com',
      projectId: 'authpractice-dd150',
      storageBucket: 'authpractice-dd150.appspot.com',
      messagingSenderId: '14567537298',

    });
  }
  render() {
    return (
      <View >
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}
