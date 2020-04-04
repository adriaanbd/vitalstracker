import React from 'react';
import { Table } from 'evergreen-ui';

function MeasureCard(props) {
  const { category, measure, vitalId } = props;
  return (
    <>
      <Table.Row key={vitalId}>
        <Table.TextCell>{category}</Table.TextCell>
        <Table.TextCell>{measure}</Table.TextCell>
      </Table.Row>
    </>
  );
}

export default MeasureCard;
