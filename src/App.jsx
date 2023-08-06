import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className="container mx-auto flex items-center justify-center h-screen w-9/12">
      <div className="bg-white flex sm:flex-wrap justify-around items-center h-3/4 p-1 relative text-lg font-black border-solid border-8 border-zinc-900 w-full h-auto">
        <div className="h-92 grid grid-cols-3 grid-rows-3 gap-3 items-center justify-center">
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            A
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            Z
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            E
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            Q
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center cursor-pointer shadow-md">
            S
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            D
          </div>
          <div className="w-20 h-20  rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            W
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            X
          </div>
          <div className="w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md">
            C
          </div>
        </div>
        <div className="absolute top-3 right-5 text-white bg-black px-3 font-light italic">
          DRUM MACHINE
        </div>
        <div className="h-96 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center">
            <p>Power</p>
            <div className="w-12 bg-black p-1 cursor-pointer">
              <div className="w-4 h-4 bg-sky-500"></div>
            </div>
          </div>
          <p className="block bg-black p-3 text-white">SOUND EFFECT</p>
          <div>
            <input max="1" min="0" step="0.01" type="range" value="0.69" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Bank</p>
            <div className="w-12 bg-black p-1 cursor-pointer">
              <div className="w-4 h-4 bg-sky-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
