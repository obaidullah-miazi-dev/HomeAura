import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] mt-32">
      <div className="loading loading-spinner loading-lg text-amber-600 w-60 "></div>
    </div>
  );
};

export default Loader;