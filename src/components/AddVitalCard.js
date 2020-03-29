import React, { useState } from 'react';
import './styles/AddVitalCard.css';
import Layout from './Layout';
import AddVitalForm from './AddVitalForm';

function AddVitalCard(props) {
  const { icon, title, id } = props;

  return (
    <>
      <Layout title="Add Vital" >
        <div>
          <h1 id="vital-card-title">{ title }</h1>
        </div>
        <div className="add-vital-card" id={id}>
          <div id="vital-card-icon">{ icon }</div>
          <AddVitalForm />
        </div>
      </Layout>
    </>
  );
}

export default AddVitalCard;