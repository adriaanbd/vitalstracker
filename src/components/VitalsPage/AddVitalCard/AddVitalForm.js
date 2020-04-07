import React, { useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Select, TextInput, Pane } from 'evergreen-ui';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createVital } from '../../../store/thunks/vitals';
import VITAL_UNITS from '../../../utils/addVitalForm';

function relPath(url) {
  const arr = url.split('/');
  return `${arr[arr.length - 1]}`;
}

const VITAL_STATE = {
  measure: '',
  unit: '',
  category: '',
};

function AddVitalForm(props) {
  const { userId } = props;
  const [vital, setVital] = useState(VITAL_STATE);
  const { measure, unit } = vital;

  const dispatch = useDispatch();

  const history = useHistory();
  const { url } = useRouteMatch();
  const category = relPath(url);

  function handleChange(event) {
    const { name, value } = event.target;
    setVital(prevState => ({
      ...prevState,
      [name]: value,
      category,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const DEFAULT_UNIT = VITAL_UNITS[category][0];
    const isMood = category === 'mood';
    let measureStr;
    if (!unit && isMood) {
      measureStr = isMood ? `${DEFAULT_UNIT}` : `${measure} ${unit}`;
      dispatch(createVital(userId, { measure: measureStr, category }));
    } else if (!unit) {
      dispatch(createVital(userId, { measure: `${measure} ${DEFAULT_UNIT}`, category }));
    } else {
      dispatch(createVital(userId, { measure: `${measure} ${unit}`, category }));
    }
    setVital(VITAL_STATE);
    history.push('/tracker');
  }

  function setOptions(vital) {
    return [
      ...[<option key="99" value={[VITAL_UNITS.category][0]} disabled hidden>UNIT</option>],
      ...VITAL_UNITS[vital].map(
        cat => <option key={cat} value={cat}>{cat}</option>,
      )];
  }

  function htmlForm(vitalName) {
    if (vitalName === 'mood') {
      return (
        <Select
          id="unit-select"
          name="unit"
          className="measure"
          value={unit}
          onChange={handleChange}
        >
          {setOptions(vitalName)}
        </Select>
      );
    }
    return (
      <>
        <TextInput
          type="text"
          name="measure"
          id="measure-input-field"
          className="measure"
          placeholder=""
          value={measure}
          onChange={handleChange}
          required
        />
        <Select
          id="unit-select"
          name="unit"
          className="measure"
          value={unit}
          onChange={handleChange}
        >
          {setOptions(vitalName)}
        </Select>
      </>
    );
  }
  return (
    <Pane marginLeft={16} marginRight={16} border="default" elevation={1}>
      <form id="new-vital-form" onSubmit={handleSubmit}>
        <div id="measure-and-unit">
          {htmlForm(category)}
        </div>
        <button
          type="submit"
          id="add-vital-btn"
        >
          Add
          {` ${category}`}
        </button>
      </form>
    </Pane>
  );
}

AddVitalForm.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default AddVitalForm;
