import React from 'react';

const Spinner = ({ size = 'lg', color = 'primary' }) => {
  const spinnerClass = `spinner-border avatar-${size} text-${color} m-2`;

  return (
    <div className="text-center">
      <div className={spinnerClass} role="status"></div>
    </div>
  );
};

export default Spinner;