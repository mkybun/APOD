import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import LikeButton from './LikeButton';

// const apiKey = process.env.REACT_APP_SECRET_KEY;

export default function Home(props) {
  const [photoOfDay, setPhoto] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [likedPhotos, updateLikedPhotos] = useState([]);

  const handleStartDateChange = (selectedStartDate) => {
    selectedStartDate = format(selectedStartDate, 'yyyy-MM-dd');
    setSelectedStartDate(selectedStartDate);
  };

  const handleEndDateChange = (date) => {
    date = format(date, 'yyyy-MM-dd');
    setSelectedEndDate(date);
  };

  useEffect(() => {
    getInitial()
    async function getInitial() {
      const API_KEY = 'YcaasWMnvNqTwGBKUWKzQZMtmKkshHp4xYz2asoc';
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${selectedStartDate}&end_date=${selectedEndDate}`
      );
      const initial = res.data
      setPhoto(initial)
    }
  })

  useEffect(() => {
    getPhoto();
    async function getPhoto() {
      const API_KEY = 'YcaasWMnvNqTwGBKUWKzQZMtmKkshHp4xYz2asoc';
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=2021-09-19`
      );
      const singlePhoto = res.data;
      setPhoto(singlePhoto);
    }
  }, []);

  return (
    <div className='outer'>
    <div className='container'>
      <div className='calendars'>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            label="Start Date"
            format="MM-dd-yyyy"
            minDate={'1995-06-16'}
            disableFuture="true"
            value={selectedStartDate}
            onChange={handleStartDateChange}
          />
          <KeyboardDatePicker
            label="End Date"
            format="MM-dd-yyyy"
            maxDate={new Date()}
            value={selectedEndDate}
            onChange={handleEndDateChange}
          />
        </MuiPickersUtilsProvider>
      </div>

      {photoOfDay.map((current) => {
        return (
          <div key={current.date} className='single-photo'>
            {current.media_type === 'image' ? (
              <img className='photo' src={current.url} alt={current.title} />
            ) : (
                <iframe
                className='video'
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
            <LikeButton
              updateLikedPhotos={updateLikedPhotos}
              likedPhotos={likedPhotos}
              current={current}
            />
          </div>
        );
      })}
      </div>
      </div>
  );
}
