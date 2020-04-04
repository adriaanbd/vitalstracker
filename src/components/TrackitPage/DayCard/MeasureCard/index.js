import React from 'react';
import { Table } from 'evergreen-ui';

function MeasureCard(props) {
  const { category, measure, vitalId } = props;
  const categoryTitle = `${category[0].toUpperCase()}${category.slice(1)}`;
  return (
    <>
      <Table.Row
        key={vitalId}
        height="auto"
        padding={8}
      >
        <Table.TextCell>{categoryTitle}</Table.TextCell>
        <Table.TextCell>{measure}</Table.TextCell>
      </Table.Row>
    </>
  );
}

export default MeasureCard;
