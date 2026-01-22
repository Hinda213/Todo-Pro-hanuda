
import type { FC } from "react";

type HeaderProps = {
    dark: boolean;
    toggleDark: () => void;
};

const Header:FC<HeaderProps> = ({dark, toggleDark}) => {
  return (
 
      <header className="flex justify-between items-center py-5 px-8 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md text-white rounded-t-2xl">
        <h1 className="text-2xl font-extrabold tracking-tight text-indigo-700 dark:text-purple-300 drop-shadow-lg">
          Todo <span className="text-pink-500 dark:text-fuchsia-400">Pro</span>
        </h1>
        <button
          onClick={toggleDark}
          className="flex items-center gap-2 p-2 rounded-xl bg-white bg-opacity-20 hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white transition-all shadow active:scale-95 border border-white border-opacity-10"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <span className="text-yellow-400">☀️</span>
          ) : (
            <span className="text-blue-200">🌙</span>
          )}
        </button>
      </header>
  
  );
 
}

export default Header