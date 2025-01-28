

 Component (Light/Dark Theme Toggle)
// TopBar.js
import React from 'react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@shadcn/react';

function TopBar() {
  const [isDark, setIsDark] = React.useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 h-12 py-4 px-6">
      <div>
        <span className="font-bold text-2xl">Log-in</span>
      </div>
      <div className="flex items-center">
        <input
          id="switch"
          type="checkbox"
          checked={isDark}
          onChange={changeTheme}
          className="block h-4 w-8 appearance-none cursor-pointer rounded-full ring-0"
        />
        <label htmlFor="switch" className="ml-2 text-gray-800 dark:text-gray-100">
          {isDark ? <MoonIcon size="24" className="text-gray-800" /> : <SunIcon size="24" className="text-gray-800" />}
        </label>
      </div>
    </div>
  );
}

export default TopBar;