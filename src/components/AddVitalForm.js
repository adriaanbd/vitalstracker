import React, { useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Select, TextInput, Pane } from 'evergreen-ui';
import { useDispatch } from 'react-redux';
import { createVital } from '../store/thunks/vitals';

const UNITS = {
  weight: ['LB', 'KG'],
  mood: [
    'Cheerful',
    'Reflective',
    'Humorous',
    'Calm',
    'Romantic',
    'Angry',
    'Tense',
    'Fearful',
    'Lonely',
    'Happy',
    'Sad',
    'Nostalgic',
    'Melancholic',
    'Lighthearted',
    'Whimsical',
  ],
  temperature: ['F', 'C'],
  glucose: ['mmnol/L', 'mg/dL'],
  systolic: ['mm Hg'],
  diastolic: ['mm Hg'],
};

function relPath(url) {
  const arr = url.split('/');
  return `${arr[arr.length - 1]}`;
}

const VITAL_STATE = {
  category: '',
  measure: '',
  unit: '',
};

function AddVitalForm(props) {
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
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!unit) {
      let measureStr;
      if (measure === 'mood') {
        measureStr = `${UNITS[category][0]}`;
      } else {
        measureStr = `${measure} ${UNITS[category][0]}`;
      }
      dispatch(createVital(props.userId, { ...vital, measure: measureStr }));
    } else {
      console.log(event);
      setVital(prev => ({ ...prev, category }));
      console.log(vital);
      // dispatch(createVital(props.userId, vital));
    }
    history.push('/vitals');
    setVital(VITAL_STATE);
  }

  function setOptions(vital) {
    return [
      ...[<option key="99" value={UNITS[vital][0]} disabled hidden>UNIT</option>],
      ...UNITS[vital].map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)];
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
          required={true}
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

export default AddVitalForm;
