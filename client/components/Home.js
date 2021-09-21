import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';

// const apiKey = process.env.REACT_APP_SECRET_KEY;

export default function Home(props) {
  const [photoOfDay, setPhoto] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const handleStartDateChange = (selectedStartDate) => {
    selectedStartDate = format(selectedStartDate, 'yyyy-MM-dd');
    setSelectedStartDate(selectedStartDate)
  };

  // const handleEndDateChange = (date) => {
  //   date = format(date, 'yyyy-MM-dd');
  //   setSelectedEndDate(date);
  // };

  // console.log('START', selectedStartDate, 'END', selectedEndDate)
  console.log('START', selectedStartDate)


  useEffect(() => {
    getPhoto();
    async function getPhoto() {
      const API_KEY = 'YcaasWMnvNqTwGBKUWKzQZMtmKkshHp4xYz2asoc';
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2021-09-15`
        // `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${selectedStartDate}`

      );
      const singlePhoto = res.data;
      setPhoto(singlePhoto);
    }
    
  }, []);

  return (
    <div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            label="Start Date"
            format='yyyy-MM-dd'
            minDate={'1995-06-16'}
            disableFuture='true'
            value={selectedStartDate}
            onChange={handleStartDateChange}
          />
          {/* <KeyboardDatePicker
            label="End Date"
            format='yyyy-MM-dd'
            maxDate={new Date()}
            value={selectedEndDate}
            onChange={handleEndDateChange}
          /> */}
        </MuiPickersUtilsProvider>
      </div>

      {photoOfDay.map((current) => {
        return (
          <div key={current.date}>
            {current.media_type === 'image' ? (
              <img src={current.url} alt={current.title} />
            ) : (
              <iframe
                title="video"
                src={current.url}
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              />
            )}

            <h1>{current.title}</h1>
            <p>{current.date}</p>
            <p>{current.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}
