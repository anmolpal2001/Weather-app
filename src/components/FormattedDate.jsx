import React from 'react';

const FormattedDate = (props) => {
  const { timestamp, timezoneOffset } = props;

  // Create a new Date object using the timestamp and apply the timezone offset
  const date = new Date((timestamp + timezoneOffset) * 1000);

  // Extract the day, date, month, and year from the date object
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return <div>{formattedDate}</div>;
};

export default FormattedDate;
