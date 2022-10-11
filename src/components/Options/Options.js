import React from 'react';

const Options = ({ option, ansHandle }) => {
  // console.log(typeof option)
  return (
    <div>
      {/* <p>{option}</p> */}
      <button
        onClick={() => ansHandle(option)}
        className="inline-block text-xl px-3 py-3 rounded-lg font-bold m-3 rounded-lg hover:bg-gray-900 hover:text-white dark:bg-sky-400 dark:text-gray-900">{option}</button>
    </div >
  );
};

export default Options;