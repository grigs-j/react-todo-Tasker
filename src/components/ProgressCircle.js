import React from 'react';

const ProgressCircle = ({radius, stroke, progress}) => {

const normalizedRadius = radius - stroke * 2;
const circumference = normalizedRadius * 2 * Math.PI;
const strokeDashoffset = circumference - progress / 100 * circumference;


  return <div className='task-card'>
      <svg
      height={radius * 2}
      width={radius * 2}
      >
      <circle
        stroke="rgb(57, 2, 207)"
        fill="transparent"
        strokeWidth={ stroke }
        strokeDasharray={circumference + ' ' + circumference }
        style={ {strokeDashoffset} } 
        r={ normalizedRadius }
        cx={ radius }
        cy={ radius }
        progress={progress}
        />
    </svg>
  </div>;
};

export default ProgressCircle;
