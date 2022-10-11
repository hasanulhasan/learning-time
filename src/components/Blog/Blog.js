import React, { useState } from 'react';

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Blog = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="232db96b-4aa2-422f-9086-5a77996d1df1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span class="relative">The</span>
            </span>{' '}
            We are thinking about your Question
          </h2>
          <p class="text-base text-gray-700 md:text-lg ">
            We thing you have some question about us . Here some demo are presented . You you have further question then contact us. We are waiting for your curiosity.
          </p>
        </div>
        <div class="space-y-4">
          <Item title="Which purpose React Router is use?">
            React Router is an API for React applications. Most current code is written with React Router 4. React Router uses dynamic client side which allows us to build a single-page web application with navigation without the page refreshing as the user navigates. By this it enhances user experience since they need not to re-render same things frequently. React Router uses component structure to call components, which display the appropriate information.
          </Item>
          <Item title="How does Context API works?">
            Despite React’s popularity, one of the biggest obstacles developers face when working with the library is components re-rendering excessively, slowing down performance and harming readability. React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree.
          </Item>
          <Item title="What can be done by React useRef Hook?">
            The useRef Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Blog;