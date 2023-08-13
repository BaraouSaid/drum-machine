// import { useState } from 'react';

const Controls = ({ soundText, clipName }) => {
  return (
    <div className="flex flex-col items-center justify-center w-64 gap-5 h-96">
      <div className="flex flex-col items-center justify-center">
        <p>Power</p>
        <div className="w-12 p-1 bg-black cursor-pointer">
          <div className="w-4 h-4 bg-sky-500"></div>
        </div>
      </div>
      <p id="display" className="block px-3 py-1 text-white bg-black">
        {clipName}
      </p>
      <div>
        <input max="1" min="0" step="0.01" type="range" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p>Bank</p>
        <div className="w-12 p-1 bg-black cursor-pointer">
          <div className="w-4 h-4 bg-sky-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
