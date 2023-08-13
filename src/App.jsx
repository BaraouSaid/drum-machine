import { useState } from 'react';
import Drumpads from './components/Drumpads';
import Controls from './components/Controls';
// import './App.css';

function App() {
  const [soundText, setSoundText] = useState('Hello');

  const heaters = [
    {
      id: 0,
      keyboardKey: 'Q',
      keyCode: 81,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      clipName: 'Heater 1',
    },
    {
      id: 1,
      keyboardKey: 'W',
      keyCode: 87,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      clipName: 'Heater 2',
    },
    {
      id: 2,
      keyboardKey: 'E',
      keyCode: 69,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      clipName: 'Heater 3',
    },
    {
      id: 3,
      keyboardKey: 'A',
      keyCode: 65,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      clipName: 'Heater 4',
    },
    {
      id: 4,
      keyboardKey: 'S',
      keyCode: 83,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      clipName: 'Clap',
    },
    {
      id: 5,
      keyboardKey: 'D',
      keyCode: 68,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      clipName: 'Open-HH',
    },
    {
      id: 6,
      keyboardKey: 'Z',
      keyCode: 90,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      clipName: 'Kick-n-Hat',
    },
    {
      id: 7,
      keyboardKey: 'X',
      keyCode: 88,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      clipName: 'Kick',
    },
    {
      id: 8,
      keyboardKey: 'C',
      keyCode: 67,
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      clipName: 'Closed-HH',
    },
  ];

  const [{ id, keyboardKey, keyCode, src, clipName }] = heaters;

  const playSound = (el) => {
    const audioKey = document.getElementById(el);
    audioKey.play();
    console.log(audioKey);
  };

  // document.addEventListener('keydown', playKeySound);

  // const displayClipName = (el) => {
  //   const test = document.getElementById(el);
  // let {clipName} = clipName
  //   setSoundText(test.clipName);
  //   console.log(test.clipName);
  // };

  const playKeySound = (e) => {
    const clipName = heaters.find(
      (heater) => heater.keyboardKey === e.key.toUpperCase()
    );
    console.log(clipName.keyboardKey);
    if (!clipName) return;

    const audioKey = document.getElementById(keyboardKey.src).play();
    // audioKey.play();
    console.log(audioKey);

    // const audioKey = document.getElementById(el);
    // audioKey.play();
    // console.log(audioKey);
  };

  return (
    <div
      id="drum-machine"
      className="relative flex flex-row items-center justify-around h-auto p-1 px-8 mx-auto text-lg font-black bg-white border-8 border-solid flex-sm:flex-wrap h-3/4 border-zinc-900 w-max"
      onKeyDown={playSound}
    >
      <Drumpads heaters={heaters} playSound={playSound} clipname={clipName} />

      <div className="absolute px-3 italic font-light text-white bg-black top-3 right-5">
        DRUM MACHINE
      </div>

      <Controls soundText={soundText} />
    </div>
  );
}

export default App;
