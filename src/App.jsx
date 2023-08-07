import { useState } from 'react';
import Drumpads from './components/Drumpads';
import './App.css';

function App() {
  const heaters = [
    {
      id: 0,
      keyboardKey: 'Q',
      keyCode: 81,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      id: 1,
      keyboardKey: 'W',
      keyCode: 87,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      id: 2,
      keyboardKey: 'E',
      keyCode: 69,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      id: 3,
      keyboardKey: 'A',
      keyCode: 65,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      id: 4,
      keyboardKey: 'S',
      keyCode: 83,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      id: 5,
      keyboardKey: 'D',
      keyCode: 68,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      id: 6,
      keyboardKey: 'Z',
      keyCode: 90,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      id: 7,
      keyboardKey: 'X',
      keyCode: 88,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      id: 8,
      keyboardKey: 'C',
      keyCode: 67,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];

  return (
    <div
      id="drum-machine"
      className=" mx-auto px-8 bg-white flex flex-row flex-sm:flex-wrap justify-around items-center h-3/4 p-1 relative text-lg font-black border-solid border-8 border-zinc-900 w-max h-auto"
    >
      <Drumpads heaters={heaters} />

      <div className="absolute top-3 right-5 text-white bg-black px-3 font-light italic">
        DRUM MACHINE
      </div>

      <div className=" w-64 h-96 flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center">
          <p>Power</p>
          <div className="w-12 bg-black p-1 cursor-pointer">
            <div className="w-4 h-4 bg-sky-500"></div>
          </div>
        </div>
        <p id="display" className="block bg-black p-3 text-white">
          SOUND EFFECT
        </p>
        <div>
          <input max="1" min="0" step="0.01" type="range" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Bank</p>
          <div className="w-12 bg-black p-1 cursor-pointer">
            <div className="w-4 h-4 bg-sky-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
