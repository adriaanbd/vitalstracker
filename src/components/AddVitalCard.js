import React from 'react';
import './styles/AddVitalCard.css';
import Layout from './Layout';

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

function setUnits(vital) {
  return [
    ...[<option value="" selected disabled hidden>UNIT</option>],
    ...UNITS[vital].map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)];
}

function AddVitalCard(props) {
  const { icon, title, id } = props;
  return (
    <>
      <Layout title="Add Vital" >
        <div className="add-vital-card" id={id}>
          <div id="vital-card-icon">{ icon }</div>
          <h1 id="vital-card-title">{ title }</h1>
          <form id="new-vital-form">
            <div id="measure-and-unit">
              <input
                type="text"
                name="measure-input"
                id="measure-input-field"
                className="measure"
                placeholder=""
              />
              <select
                id="unit-select"
                name="unit"
                className="measure">
                { setUnits() }
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