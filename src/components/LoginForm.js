import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess.bind(this))
          .catch(() => this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
            Log In
      </Button>
    );
  }

  render() {
    const hi = 'yo';
    return (
      <Card>

        <CardSection>
          <Input
            placeholder="example@email.com"
            label="email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
};

export default LoginForm;
