import React from 'react';
import './styles/AddVitalCard.css'

const UNITS = ['LB', 'KG']

function setUnits() {
  return [
    ...[<option value="" selected disabled hidden>UNIT</option>],
    ...UNITS.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)];
}

function AddVitalCard(props) {
  const { icon, title, id } = props
  return (
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
  )
}

export default AddVitalCard;