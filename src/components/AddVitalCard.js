import React, { useState } from 'react';
import './styles/AddVitalCard.css';
import Layout from './Layout';
import { useRouteMatch } from 'react-router-dom';

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
  measureInput: '',
  unit: '',
};

function setUnits(vital) {
  return [
    ...[<option value="" selected disabled hidden>UNIT</option>],
    ...UNITS[vital].map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)];
}

function relPath(url) {
  const arr = url.split('/');
  return arr[arr.length - 1];
}


function AddVitalCard(props) {
  const { url } = useRouteMatch();
  const [vitalData, setVitalData] = useState(DEFAULT_STATE);
  const { icon, title, id } = props;

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
    setVitalData(DEFAULT_STATE);
  }

  return (
    <>
      <Layout title="Add Vital" >
        <div className="add-vital-card" id={id}>
          <div id="vital-card-icon">{ icon }</div>
          <h1 id="vital-card-title">{ title }</h1>
          <form id="new-vital-form" onSubmit={handleSubmit}>
            <div id="measure-and-unit">
              <input
                type="text"
                name="measure-input"
                id="measure-input-field"
                className="measure"
                placeholder=""
                value={vitalData.value}
                onChange={handleChange}
              />
              <select
                id="unit-select"
                name="unit"
                className="measure"
                value={vitalData.unit}
                onChange={handleChange}>
                { setUnits(relPath(url)) }
              </select>
            </div>
            <button type="submit" id="add-vital-btn">ADD VITAL</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default AddVitalCard;