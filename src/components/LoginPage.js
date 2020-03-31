import React from 'react';
import HeaderRibbon from './HeaderRibbon';
import { Pane, Card, TextInput } from 'evergreen-ui';
import './styles/LoginPage.css';

function LoginPage() {
  function handleSubmit() {
    alert('Button was clicked!');
  }

  function handleChange() {
    return '';
  }

  return (
    <>
      <HeaderRibbon />
      <Pane display="flex"
            height="90%"
            width="100vw"
            justifyContent="center"
            alignItems="center"
            backgroundColor="whitesmoke">
        <Card border="default"
              elevation={1}
              width="80%"
              backgroundColor="white"
              display="flex"
              flexDirection="column"
              justifyContent="center">
          <Pane paddingLeft="2em"
                paddingRight="2em"
                paddingTop="4em"
                paddingBottom="4em">
            <TextInput
              type="text"
              name="email"
              id="email-input"
              placeholder="Email or Username"
              height="2.5em"
              marginBottom={1}
              padding={8}
              onChange={handleChange}
            />
            <button onClick={handleSubmit} id="login" type="submit">
              Login or Signup
            </button>
          </Pane>
        </Card>
      </Pane>
    </>
  );
}

export default LoginPage;