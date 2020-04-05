import React from 'react';
import { useSelector } from 'react-redux';

import {
  Pane, Heading, Text,
} from 'evergreen-ui';
import Layout from '../../Layout';
import AddVitalForm from './AddVitalForm';

import './AddVitalCard.css';

function AddVitalCard(props) {
  const { icon, title, id } = props;
  const { id: userId } = useSelector(state => state.users.user);
  return (
    <>
      <Layout title="Add Vital">
        <Pane height="80%">
          <Pane>
            <Heading
              color="#67899C"
              fontWeight={600}
              textAlign="center"
              padding={16}
            >
              { title }
            </Heading>
          </Pane>
          <Pane
            display="flex"
            id={id}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100vw"
            backgroundColor="whitesmoke"
          >
            <Text id="vital-card-icon">{icon}</Text>
            <AddVitalForm userId={userId || sessionStorage.userId} />
          </Pane>
        </Pane>
      </Layout>
    </>
  );
}

export default AddVitalCard;
