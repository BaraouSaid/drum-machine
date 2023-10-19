const Drumpads = ({ heaters, playSound }) => {
  return (
    <div className="grid items-center justify-center grid-cols-3 gap-8 m-4 h-92 md:gap-5">
      {heaters.map(({ id, src, keyboardKey, clipName }) => {
        return (
          <div
            onClick={() => {
              playSound(keyboardKey, clipName);
            }}
            // className="flex items-center justify-center w-20 h-20 bg-white rounded-md shadow-md cursor-pointer drum-pad"
            className="flex items-center justify-center bg-white rounded-md shadow-md cursor-pointer w-14 h-14 drum-pad md:w-20 md:h-20 "
            key={id}
            id={src}
          >
            {keyboardKey}
            <audio
              className="clip"
              src={src}
              id={keyboardKey}
              clipname={clipName}
            ></audio>
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
