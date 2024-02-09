import React, { useState, useEffect } from "react";
import { debounce } from "../../utils/debounce";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = debounce(onSearch, 300);

  useEffect(() => {
    debouncedSearch(inputValue);
    return () => debouncedSearch.cancel();
  }, [inputValue, debouncedSearch]);

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-500 to-blue-600 text-white z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">
          Rick and Morty Explorer
        </h1>
        <div className="relative">
          <input
            className="p-2 pl-10 w-full md:w-80 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-black"
            type="text"
            placeholder="Pesquisar personagem..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <svg
            className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
