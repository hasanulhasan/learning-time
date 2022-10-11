import React from 'react';

const Options = ({ option }) => {

  return (
    <div>
      {/* <p>{option}</p> */}
      <a rel="noopener noreferrer" href="#" className="inline-block text-xl px-3 py-3 rounded-lg font-bold m-3 rounded-sm hover:underline dark:bg-sky-400 dark:text-gray-900">{option}</a>
    </div >
  );
};

export default Options;