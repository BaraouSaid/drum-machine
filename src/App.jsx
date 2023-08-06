import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className="container mx-auto my-auto">
      <div className="bg-stone-900 flex justify-around items-center h-3/4 p-10">
        <div className="h-92 grid grid-cols-3 grid-rows-3 gap-3 items-center justify-center">
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center">
            A
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center ">
            Z
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center">
            E
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center">
            Q
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center">
            S
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center">
            D
          </div>
          <div className="w-20 h-20  rounded-md bg-white flex items-center justify-center">
            W
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center">
            X
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center">
            C
          </div>
        </div>
        <div className="h-96">Hey</div>
      </div>
    </div>
  );
}

export default App;
