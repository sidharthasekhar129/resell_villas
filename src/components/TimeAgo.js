import React, { useState, useEffect } from 'react';
import moment from 'moment';

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const updateInterval = setInterval(() => {
      const currentTime = moment();
      const postTime = moment(timestamp);
      const diff = currentTime.diff(postTime);

      setTimeAgo(moment.duration(diff).humanize(true));
    }, 1000); // Update every second

    return () => clearInterval(updateInterval);
  }, [timestamp]);
  return <span  style={{fontSize:11}} >{timeAgo.replace('in ', '')} ago</span>;

 
};

export default TimeAgo;
