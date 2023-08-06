import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div
      id="drum-machine"
      className="container mx-auto flex items-center justify-center h-screen w-9/12"
    >
      <div
        id="display"
        className="bg-white flex sm:flex-wrap justify-around items-center h-3/4 p-1 relative text-lg font-black border-solid border-8 border-zinc-900 w-full h-auto"
      >
        <div className="h-92 grid grid-cols-3 grid-rows-3 gap-3 items-center justify-center">
          <div
            id="Q"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            Q
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              id="Q"
              className="clip"
            ></audio>
          </div>
          <div
            id="W"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            W
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              id="W"
              className="clip"
            ></audio>
          </div>
          <div
            id="E"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            E
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              id="E"
              className="clip"
            ></audio>
          </div>
          <div
            id="A"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            A
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              id="A"
              className="clip"
            ></audio>
          </div>
          <div
            id="S"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center cursor-pointer shadow-md"
          >
            S
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              id="S"
              className="clip"
            ></audio>
          </div>
          <div
            id="D"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            D
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              id="D"
              className="clip"
            ></audio>
          </div>
          <div
            id="Z"
            className="drum-pad w-20 h-20  rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            Z
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              id="Z"
              className="clip"
            ></audio>
          </div>
          <div
            id="X"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            X
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              id="X"
              className="clip"
            ></audio>
          </div>
          <div
            id="C"
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            C
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              id="C"
              className="clip"
            ></audio>
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
