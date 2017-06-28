import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };
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

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
