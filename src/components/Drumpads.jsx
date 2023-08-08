// import { PropTypes } from 'react';

const Drumpads = ({ heaters }) => {
  //Definition of the function responsible to play the sound when clicked
  const playSound = (el) => {
    const audioKey = document.getElementById(el);
    audioKey.play();
  };
  return (
    <div className="h-92 grid grid-cols-3 gap-3 items-center justify-center">
      {heaters.map(({ id, src, keyboardKey }) => {
        return (
          <div
            onClick={() => {
              playSound(keyboardKey);
            }}
            key={id}
            id={src}
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            {keyboardKey}
            <audio src={src} id={keyboardKey} className="clip"></audio>
          </div>
        );
      })}
    </div>
  );
};

// Drumpads.propTypes = {
//   id: PropTypes.number.isRequired,
//   src: PropTypes.string.isRequired,
//   keyboardKey: PropTypes.string.isRequired,
// };

export default Drumpads;
