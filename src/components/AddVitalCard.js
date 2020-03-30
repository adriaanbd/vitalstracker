import React from 'react';
import './styles/AddVitalCard.css';
import Layout from './Layout';
import AddVitalForm from './AddVitalForm';
import { Pane, Heading, Text } from 'evergreen-ui';

function AddVitalCard(props) {
  const { icon, title, id } = props;

  return (
    <>
      <Layout title="Add Vital">
        <Pane height="80%">
          <Pane>
          <Heading color="#67899C"
                   fontWeight={600}
                   textAlign="center"
                   padding={16}
          >
          { title }
          </Heading>
          </Pane>
          <Pane display="flex"
                id={id}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100vw"
                backgroundColor="whitesmoke"
          >
            <Text id="vital-card-icon">{ icon }</Text>
            <AddVitalForm />
          </Pane>
        </Pane>
      </Layout>
    </>
  );
}

export default AddVitalCard;