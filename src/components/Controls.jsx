const Controls = () => {
  return (
    <div className=" w-64 h-96 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <p>Power</p>
        <div className="w-12 bg-black p-1 cursor-pointer">
          <div className="w-4 h-4 bg-sky-500"></div>
        </div>
      </div>
      <p id="display" className="block bg-black px-3 py-1 text-white">
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
  );
};

export default Controls;
