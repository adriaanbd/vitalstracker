import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'evergreen-ui';
import MeasureCard from './MeasureCard';
import DayCardHeader from './Header';

function setMeasureCards(dayData) {
  const cards = [];
  if (!dayData) { return; }
  for (let i = 0; i < dayData.length; i += 1) {
    const {
      category, measure, id, created_at: date,
    } = dayData[i];
    cards.push(
      <MeasureCard
        category={category}
        measure={measure}
        vitalId={id}
        date={date}
        key={i}
      />,
    );
  }
  // eslint-disable-next-line consistent-return
  return cards;
}

function DayCard(props) {
  const { day, data } = props;

  return (
    <>
      <DayCardHeader title={day} />
      <Table overflow="scroll">
        <Table.Head paddingLeft={4} width="100%">
          <Table.TextHeaderCell>
            Category
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Measure
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Date
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height="auto">
          { setMeasureCards(data) }
        </Table.Body>
      </Table>
    </>
  );
}

DayCard.propTypes = {
  day: PropTypes.string.isRequired,
  // data: PropTypes.
};

export default DayCard;
