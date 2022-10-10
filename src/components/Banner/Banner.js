import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="mb-16 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Heyy strange
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Welcome to our website
                <br className="hidden md:block" />
                Here you can{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  Justify your skill level
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">There’s no doubt that the cost of education is on the rise. The financial concerns of earning your education should never stop you from doing so because, as Benjamin Franklin once said, this investment in yourself will pay you back with interest over your entire lifetime. Additionally, you can earn your education in a cost-effective way. Check out the University of the People’s degree programs that are all tuition-free.
              </p>
            </div>
            <div className="flex items-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-lime-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
          <img
            src="https://kitwind.io/assets/kometa/full-browser.png"
            className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;