const Drumpads = ({ heaters }) => {
  //Definition of the function responsible to play the sound when clicked
  const playSound = (el) => {
    const audioKey = document.getElementById(el);
    audioKey.play();
  };
  return (
    <div className="h-92 grid grid-cols-3 gap-3 items-center justify-center">
      {heaters.map((heater) => {
        return (
          <div
            onClick={() => {
              playSound(heater.keyboardKey);
            }}
            key={heater.id}
            id={heater.src}
            className="drum-pad w-20 h-20 rounded-md bg-white flex items-center justify-center  cursor-pointer shadow-md"
          >
            {heater.keyboardKey}
            <audio
              src={heater.src}
              id={heater.keyboardKey}
              className="clip"
            ></audio>
          </div>
        );
      })}
    </div>
  );
};

export default Drumpads;
