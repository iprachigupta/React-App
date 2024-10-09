import { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";


const ToggleSwitch = () => {
  const [but, setBut] = useState(false);
  const handleOnClickButton = () => {
    setBut(!but);
  };
  return (
    <div>
      <h1 className="text-center font-bold mt-4 text-teal-400 text-4xl">
        Toggle Switch <GoArrowSwitch />
      </h1>
      <div className="flex place-items-center w-80 h-screen">
        <button
          className="rounded-full bg-lime-300 mx-96"
          onClickCapture={handleOnClickButton}
        >
          <div className="flex place-items-center w-40 h-24">
            {but ? (
              <span className="rounded-full bg-red-500 p-5 m-5 text-white">
                Off
              </span>
            ) : (
              <span className="rounded-full border-gray-300 border-4 bg-blue-500 p-5 m-5 text-white translate-x-14">
                On
              </span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ToggleSwitch;
