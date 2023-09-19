"use client";

import fetchSuggestion from "@/lib/fetchSuggestionFunc";
import { useBoardStore } from "@/store/BoardStore";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import logo from "../app/assests/Trello_logo.svg.png";

const Header = () => {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>("");

  useEffect(() => {
    if (board.columns.size === 0) return;

    setLoading(true);

    const fetchSuggestionFunc = async () => {
      const suggestion = await fetchSuggestion(board);
      setSuggestion(suggestion);
      setLoading(false);
    };
    // fetchSuggestionFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl  ">
        <div
          className={`gradient absolute top-0 left-0 w-full h-full
            -z-50
            rounded-md
            filter
            blur-2xl
            opacity-50
            max-h-[60vh]
            `}
        />
       
        {/* <div
          className="absolute top-0 left-0 w-full h-full
          bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
            -z-50
            rounded-md"
        /> */}
        <Image
          src={logo}
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain filter "
        />

        <div className="flex  items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              className="flex-1 outline-none p-2"
              placeholder="Serach"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar round color="#0055D1" size="50" name="Snehal Prajapati" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-xl text-[#0055D1]">
          <UserCircleIcon
            className={`inline-block h-10 w-10 mr-1 text-[#0055D1] ${
              loading && "animate-spin"
            }`}
          />
          {suggestion && !loading
            ?
             suggestion
            : "GPT is summarising your tasks for the day..."}
        </p>
      </div>
    </header>
  );
};

export default Header;
