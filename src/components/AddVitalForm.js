import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Select, TextInput, Pane } from 'evergreen-ui';
import { useDispatch } from 'react-redux';
import createVital from '../actions/index';

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

function AddVitalForm() {
  const { url } = useRouteMatch();
  const [vitalData, setVitalData] = useState(DEFAULT_STATE);
  const dispatch = useDispatch();
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
    // here we make a post to the api endpoint to save result
    if (!vitalData.unit) {
      dispatch(createVital({
        ...vitalData,
        unit: UNITS[vitalName][0],
        category: vitalName,
      }));
    } else {
      dispatch(createVital({ ...vitalData, category: vitalName }));
    }
    setVitalData(DEFAULT_STATE);
  }

  function setOptions(vital) {
    return [
      ...[<option value={UNITS[vital][0]} disabled hidden>UNIT</option>],
      ...UNITS[vital].map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)];
  }

  return (
    <Pane marginLeft={16} marginRight={16} border="default" elevation={1}>
      <form id="new-vital-form" onSubmit={handleSubmit}>
        <div id="measure-and-unit">
          <TextInput
            type="text"
            name="measureInput"
            id="measure-input-field"
            className="measure"
            placeholder=""
            value={vitalData.measureInput}
            onChange={handleChange}
          />
          <Select
            id="unit-select"
            name="unit"
            className="measure"
            value={vitalData.unit}
            onChange={handleChange}
            children={setOptions(vitalName)}>
          </Select>
        </div>
        <button type="submit"
                id="add-vital-btn">Add {`${vitalName}`}
        </button>
      </form>
    </Pane>
  );
}

export default AddVitalForm;