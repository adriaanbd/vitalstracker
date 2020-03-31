import React from 'react';
import HeaderRibbon from './HeaderRibbon';
import { Pane, Card, Text } from 'evergreen-ui';

function LoginPage() {
  function handleSubmit() {
    return '';
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
              padding="8em"
              backgroundColor="white">
          <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              name="email"
              id="email-input"
              placeholder="Your email"
              value={userData.email}
              onChange={handleChange}
            />
          </form>
          <Text>Login Page</Text>
        </Card>
      </Pane>
    </>
  );
}

export default LoginPage;