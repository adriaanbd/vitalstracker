import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'evergreen-ui';

function MeasureCard(props) {
  const {
    category, measure, vitalId, date,
  } = props;
  const d = new Date(date.split('T')[0]);
  const categoryTitle = `${category[0].toUpperCase()}${category.slice(1)}`;
  const dateCreated = date ? `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}` : '';
  return (
    <>
      <Table.Row
        key={vitalId}
        height="auto"
        padding={8}
      >
        <Table.TextCell>{categoryTitle}</Table.TextCell>
        <Table.TextCell>{measure}</Table.TextCell>
        <Table.TextCell>{dateCreated}</Table.TextCell>
      </Table.Row>
    </>
  );
}

MeasureCard.propTypes = {
  category: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  vitalId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default MeasureCard;
