import React, { useState } from 'react';
import HeaderRibbon from './HeaderRibbon';
import { Pane, Card, TextInput } from 'evergreen-ui';
import './styles/LoginPage.css';

const DEFAULT_STATE = {
  username: '',
};

function LoginPage(props) {
  const [userData, setUserData] = useState(DEFAULT_STATE);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData(prevUserData => ({
      ...prevUserData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    alert('Button was clicked!');
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
              name="username"
              id="email-input"
              placeholder="Username"
              value={userData.username}
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