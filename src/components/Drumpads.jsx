// import { PropTypes } from 'react';

const Drumpads = ({ heaters, playSound }) => {
  //Definition of the function responsible to play the sound when clicked
  // const playSound = (el) => {
  //   const audioKey = document.getElementById(el);
  //   audioKey.play();
  //   console.log();
  // };

  return (
    <div className="grid items-center justify-center grid-cols-3 gap-3 h-92">
      {heaters.map(({ id, src, keyboardKey, clipName }) => {
        return (
          <div
            onClick={() => {
              playSound(keyboardKey, clipName);
            }}
            className="flex items-center justify-center w-20 h-20 bg-white rounded-md shadow-md cursor-pointer drum-pad"
            key={id}
            id={src}
          >
            {keyboardKey}
            <audio className="clip" src={src} id={keyboardKey}></audio>
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
