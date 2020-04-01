import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchVitals } from '../actions/index';
import { usersEndpoint } from '../api/endpoints';
import { Pane, Text } from 'evergreen-ui';
import TrackitCard from './TrackitCard';
import './styles/TrackitCards.css';
import Layout from './Layout';

function TrackitCards() {
  const { vitals } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(`${usersEndpoint}${localStorage.user_id}$/vitals`);
        const data = await resp.data;
        dispatch(fetchVitals(data));
        localStorage.setItem('vitals', JSON.stringify(data));
      } catch (error) {
        //
      }
    })();
  }, []);
  console.log("vitals from store are =>", vitals);
  // loop over the data and insert trackit cards into trackit day
  // trackit days are: Today, Yesterday and Last Week
  function setCards() {
    // console.log('set tracking cards vitals are =>', vitals);
    const { today, yesterday, last_week } = JSON.parse(localStorage.vitals);
    console.log(today);
    console.log(yesterday);
    console.log(last_week);
    const html = [];
    if (today) {
      let isHeader = false;
      for (let i = 0; i < today.length; i += 1) {
        const { category, measure } = today[i];
        html.push(<TrackitCard day={isHeader ? '' : 'Today'}
                             category={category}
                             measure={measure}
                />);
        isHeader = true;
      }
    } if (yesterday) {
      let isHeader = false;
      for (let i = 0; i < yesterday.length; i += 1) {
        const { category, measure } = yesterday[i];
        html.push(<TrackitCard day={isHeader ? '' : 'Yesterday'}
                             category={category}
                             measure={measure}
                />);
        isHeader = true;
      }
    } if (last_week) {
      let isHeader = false;
      for (let i = 0; i < last_week.length; i += 1) {
        const { category, measure } = last_week[i];
        html.push(<TrackitCard day={isHeader ? '' : 'One week ago'}
                             category={category}
                             measure={measure}
                />);
        isHeader = true;
      }
    }
    return html;
  }

  return (
    <>
      <Layout>
        <Pane display="flex"
              flexDirection="column"
              width="100vw"
              height="80%"
        >
          {setCards()}
        </Pane>
      </Layout>
    </>
  );
}

export default TrackitCards;