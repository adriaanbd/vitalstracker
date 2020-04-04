import React from 'react';
import { Link } from 'react-router-dom';
import {
  Pane, Card, Heading, Text,
} from 'evergreen-ui';

function VitalCard(props) {
  const {
    icon, title, path,
  } = props;
  return (
    <Pane flex={1} alignSelf="center" minWidth="35%">
      <Link to={`/vitals/${path}`} className="vital-card-link">
        <Card
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          color="#62b5e5"
          border="default"
          elevation={1}
          padding="1em"
        >
          <Text color="#62b5e5">{ icon }</Text>
          <Heading
            textAlign="center"
            color="#62b5e5"
            padding={8}
          >
            { title }
          </Heading>
        </Card>
      </Link>
    </Pane>
  );
}

export default VitalCard;
