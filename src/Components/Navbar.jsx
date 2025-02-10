 
 import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="flex relative justify-between items-center p-4 bg-white shadow-md ml-20">
        <h1 className="text-gray-700 text-lg font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute -top-1 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            <button className="text-gray-600">
            <svg width="20" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_7)">
<path d="M12.325 11.1749H13.55V12.3999H1.30003V11.1749H2.52503V6.88743C2.52503 5.58787 3.04127 4.34153 3.9602 3.4226C4.87913 2.50368 6.12547 1.98743 7.42503 1.98743C8.72459 1.98743 9.97092 2.50368 10.8898 3.4226C11.8088 4.34153 12.325 5.58787 12.325 6.88743V11.1749ZM11.1 11.1749V6.88743C11.1 5.91276 10.7128 4.97801 10.0236 4.28881C9.33445 3.59961 8.3997 3.21243 7.42503 3.21243C6.45036 3.21243 5.5156 3.59961 4.82641 4.28881C4.13721 4.97801 3.75003 5.91276 3.75003 6.88743V11.1749H11.1ZM5.58753 13.6249H9.26253V14.8499H5.58753V13.6249Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1_7">
<rect width="14.7" height="14.7" fill="white" transform="translate(0.0750122 0.762573)"/>
</clipPath>
</defs>
</svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 overflow-hidden">
              <img
                src="./assets/img2.avif"
                 alt="User Avatar"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <span className="text-gray-400">Rowena Ravenclaw</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
