// import { useState } from 'react';

const Controls = ({ clipName }) => {
  const buttonsClassName = 'w-4 h-4 bg-sky-500';
  console.log(buttonsClassName);
  // const toggleClassName = (e) => {

  //   if(buttonsClassName === e.target.className) {
  //     e.target.className = ` ${buttonsClassName} ml-6 `
  //   }
  // }
  return (
    <div className="flex flex-col items-center justify-center w-64 gap-5 h-96">
      <div className="flex flex-col items-center justify-center">
        <p>Power</p>
        <div
          className="w-12 p-1 bg-black cursor-pointer "
          onClick={(e) => {
            let childDiv = e.target.firstChild;

            if (!childDiv.className.includes('ml-6')) {
              childDiv.className = `${buttonsClassName} ml-6 `;
            } else {
              childDiv.className = buttonsClassName;
            }
          }}
        >
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
        <div
          className="w-12 p-1 bg-black cursor-pointer"
          onClick={(e) =>
            (e.target.firstChild.className = `w-4 h-4 bg-sky-500 ml-6`)
          }
        >
          <div
            className="w-4 h-4 bg-sky-500"
            onClick={(e) => {
              e.target.className = `${buttonsClassName}`;
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
