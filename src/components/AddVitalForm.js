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

const DEFAULT_STATE = {
  category: '',
  measureInput: '',
  unit: '',
};


function relPath(url) {
  const arr = url.split('/');
  return arr[arr.length - 1];
}


function AddVitalForm(props) {
  const { url } = useRouteMatch();
  const [vitalData, setVitalData] = useState(DEFAULT_STATE);
  const dispatch = useDispatch();
  const history = useHistory();
  const vitalName = relPath(url);

  function handleChange(event) {
    const { name, value } = event.target;
    setVitalData(prevVitalData => ({
      ...prevVitalData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!vitalData.unit) {
      let measureStr;
      if (vitalData.measureInput === 'mood') {
        measureStr = `${UNITS[vitalName][0]}`;
      } else {
        measureStr = `${vitalData.measureInput} ${UNITS[vitalName][0]}`;
      }
      const data = {
        measure: measureStr,
        category: vitalName,
      };
      dispatch(createVital(props.userId, data));
    } else {
      const data = { measure: vitalData.measureInput, category: vitalName, ...vitalData };
      dispatch(createVital(props.userId, data));
    }
    history.push('/vitals');
    setVitalData(DEFAULT_STATE);
  }

  function setOptions(vital) {
    return [
      ...[<option value={UNITS[vital][0]} disabled hidden>UNIT</option>],
      ...UNITS[vital].map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)];
  }

  function htmlForm(vitalName) {
    if (vitalName === 'mood') {
      return (
        <Select
          id="unit-select"
          name="unit"
          className="measure"
          value={vitalData.unit}
          onChange={handleChange}
          children={setOptions(vitalName)}>
        </Select>
      );
    }
    return (
      <>
        <TextInput
          type="text"
          name="measureInput"
          id="measure-input-field"
          className="measure"
          placeholder=""
          value={vitalData.measureInput}
          onChange={handleChange}
          required={true}
        />
        <Select
          id="unit-select"
          name="unit"
          className="measure"
          value={vitalData.unit}
          onChange={handleChange}
          children={setOptions(vitalName)}>
        </Select>
      </>
    );
  }
  return (
    <Pane marginLeft={16} marginRight={16} border="default" elevation={1}>
      <form id="new-vital-form" onSubmit={handleSubmit}>
        <div id="measure-and-unit">
          {htmlForm(vitalName)}
        </div>
        <button type="submit"
                id="add-vital-btn">Add {`${vitalName}`}
        </button>
      </form>
    </Pane>
  );
}

export default AddVitalForm;