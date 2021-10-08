import React from 'react';

const Loading = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border d-flex m-auto"
        role="status"
        style={{ height: '100px', width: '100px', marginTop: '100px' }}
      ></div>
    </div>
  );
};

export default Loading;
