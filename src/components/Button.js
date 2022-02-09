import React from 'react';

const Button = ({display, onClick}) => {

  return <button onClick={onClick} className='btn'>{display}</button>;
};

export default Button;
