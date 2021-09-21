import React, { useState } from 'react';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import { format } from 'date-fns';

export default function Navbar(props) {
  // const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  // const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  // const handleStartDateChange = (date) => {
  //   date = format(date, 'yyyy-MM-dd');
  //   console.log(date);
  //   setSelectedStartDate(date);
  // };

  // const handleEndDateChange = (date) => {
  //   date = format(date, 'yyyy-MM-dd');
  //   console.log(date);
  //   setSelectedEndDate(date);
  // }

  return (
    <div>
      <h1>APOD</h1>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          label="Start Date"
          minDate={'1995-06-16'}
          value={selectedStartDate}
          onChange={handleStartDateChange}
          handlestartdatechange={handleStartDateChange}
        />
        <KeyboardDatePicker
          label="End Date"
          maxDate={new Date()}
          value={selectedEndDate}
          onChange={handleEndDateChange}
        />
      </MuiPickersUtilsProvider> */}
      <nav></nav>
      <hr />
    </div>
  );
}
