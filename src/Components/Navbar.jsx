import React from 'react';
import useTheme from '../contexts/theme';
import { Sun, Moon, Bell } from 'lucide-react';

const Navbar = ({ hasNotification = true }) => {
  const { theme, darkTheme, lightTheme } = useTheme();

  const toggleTheme = () => {
    theme === 'dark' ? lightTheme() : darkTheme();
  };

  return (
    <>
      <nav
        className={`flex relative justify-between items-center p-4 shadow-md ml-20 h-20 ${
          theme === 'dark' ? 'bg-[#19191a]' : ''
        }`}
      >
        <h1
          className={` text-lg font-semibold ${
            theme === 'dark' ? 'bg-[#19191a]' : ''
          }`}
        >
          Dashboard
        </h1>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col justify-around items-end'>
            <button
              type='button'
              className='hover:cursor-pointer'
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun width={25} height={25} />
              ) : (
                <Moon width={25} height={25} />
              )}
            </button>
          </div>
          <div className='flex flex-col justify-around items-end'>
            <button className='hover:cursor-pointer relative inline-block'>
              <Bell width={25} height={25} />
              {hasNotification && (
                <span className='absolute top-0 w-2 h-2 bg-red-500 rounded-full'></span>
              )}
            </button>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-8 h-8 overflow-hidden'>
              <img
                src='./assets/img2.avif'
                alt='User Avatar'
                className='object-cover object-center w-full h-full'
              />
            </div>
            <span
              className={`text-gray-400 ${
                theme === 'dark' ? 'bg-[#19191a]' : ''
              }`}
            >
              Rowena Ravenclaw
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
