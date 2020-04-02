import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { Pane, Card, TextInput } from 'evergreen-ui';
import { loginEndpoint, usersEndpoint } from '../api/endpoints';
import { loginUserSuccess, createUser } from '../store/actions/index';
import HeaderRibbon from './HeaderRibbon';
import './styles/LoginPage.css';

const DEFAULT_STATE = {
  username: '',
};

function LoginPage(props) {
  const [userData, setUserData] = useState(DEFAULT_STATE);
  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({ [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { target } = event;
    let resp;
    (async () => {
      try {
        if (target.id === 'signup') {
          resp = await axios.post(usersEndpoint, { ...userData });
          dispatch(createUser(resp.data));
        } else {
          resp = await axios.post(loginEndpoint, { ...userData });
          dispatch(loginUserSuccess(resp.data));
        }
        localStorage.setItem('username', resp.data.username);
        localStorage.setItem('user_id', resp.data.id);
        history.push('/vitals');
      } catch (error) {
        //
      }
    })();
    setUserData(DEFAULT_STATE);
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
              padding={8}
              width="100%"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}
                    id="login"
                    className="auth-btn"
                    type="submit">
              Login
            </button>
            <button onClick={handleSubmit}
                    id="signup"
                    className="auth-btn"
                    type="submit">
              Signup
            </button>
          </Pane>
        </Card>
      </Pane>
    </>
  );
}

export default LoginPage;