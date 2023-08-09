// import { PropTypes } from 'react';

const Drumpads = ({ heaters }) => {
  //Definition of the function responsible to play the sound when clicked
  const playSound = (el) => {
    const audioKey = document.getElementById(el);
    audioKey.play();
  };

  return (
    <div className="grid items-center justify-center grid-cols-3 gap-3 h-92">
      {heaters.map(({ id, src, keyboardKey }) => {
        return (
          <div
            onClick={() => {
              playSound(keyboardKey);
            }}
            key={id}
            id={src}
            className="flex items-center justify-center w-20 h-20 bg-white rounded-md shadow-md cursor-pointer drum-pad"
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
