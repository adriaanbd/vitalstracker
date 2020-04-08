import React from 'react';
import { Icon, Pane, Heading, Text } from 'evergreen-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrophy,
  faStar,
  faStarOfLife,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../../Layout';
import ProfileBadge from './Badge';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <Pane height="100%" width="100vw">
      <Layout
        title="Profile"
        icon={<Icon icon="chevron-left" size="20px" />}
        iconTitle="angle-left"
      >
        <Pane display="flex" flexDirection="column" height="40%" backgroundColor="#62b5e5">
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Pane display="flex" margin="1em" color="#455a65">
              <Icon icon="user" size="8em" />
            </Pane>
            <Pane display="flex" flexDirection="column">
              <Heading color="whitesmoke">Emma Watson</Heading>
              <Pane marginTop="0.2em" color="#455a65">
                <Text marginRight={2}>Female</Text>
                <Text>|</Text>
                <Text marginLeft={2}>120lbs</Text>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
        <Pane height="40%" backgroundColor="#e5eaee">
          <Pane
            display="flex"
            height="4em"
            width="100%"
            backgroundColor="whitesmoke"
          >
            <Pane
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="50%"
              height="100%"
              color="#455a65"
            >
              <Text>
                Edit Photo
              </Text>
            </Pane>
            <Pane
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="50%"
              height="100%"
              color="#455a65"
            >
              <Text>
                Edit Profile
              </Text>
            </Pane>
          </Pane>
          <Pane marginX="1em" marginTop="1em" marginBottom="3em">
            <Pane id="badges-title-box">
              <Text color="#455a65">
                Your badges
              </Text>
            </Pane>
            <Pane display="flex" justifyContent="center">
              <ProfileBadge
                icon={<FontAwesomeIcon icon={faTrophy} />}
                data="100"
              />
              <ProfileBadge
                icon={<FontAwesomeIcon icon={faStar} />}
                data="100"
              />
              <ProfileBadge
                icon={<FontAwesomeIcon icon={faStarOfLife} />}
                data="100"
              />
              <ProfileBadge
                icon={<FontAwesomeIcon icon={faShieldAlt} />}
                data="100"
              />
            </Pane>
          </Pane>
        </Pane>
      </Layout>

    </Pane>
  );
}

export default ProfilePage;
