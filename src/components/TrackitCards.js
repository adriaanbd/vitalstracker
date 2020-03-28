import React from 'react';
import TrackitCard from './TrackitCard';
import './styles/TrackitCards.css';
import Layout from './Layout';

function TrackitCards() {
  // loop over the data and insert trackit cards into trackit day
  // trackit days are: Today, Yesterday and Last Week
  return (
    <>
      <Layout>
        <div id="trackit-container">
          <div className="trackit-day-and-card">
            <div className="trackit-day" id="today">Today</div>
            <TrackitCard />
          </div>
          <div className="trackit-day-and-card">
            <div className="trackit-day" id="yesterday">Yesterday</div>
            <TrackitCard />
          </div>
          <div className="trackit-day-and-card">
            <div className="trackit-day" id="last-week">Last Week</div>
            <TrackitCard />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TrackitCards;