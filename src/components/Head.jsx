import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestions, setIsSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    $(document).ready(function () {
      window.suggestCallBack = function (data) {
        var suggestions = [];
        $.each(data[1], function (key, val) {
          suggestions.push({ value: val[0] });
        });
        suggestions.length = 10;
        const valuesArray = suggestions.map((obj) => obj.value);
        console.log(valuesArray);
        setSuggestions(valuesArray);
        dispatch(cacheResults({ [searchQuery]: valuesArray }));
      };

      $("#search").autocomplete({
        source: function (request, response) {
          $.getJSON(
            "https://suggestqueries.google.com/complete/search?callback=?",
            {
              hl: "en",
              ds: "yt",
              jsonp: "suggestCallBack",
              q: request.term,
              client: "youtube",
            }
          );
        },
      });
    });
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchSuggestions = () => {
    setIsSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col shadow-lg-black items-center md:gap-28 md:p-3 p-3 md:w-screen">
      <div className="flex items-center col-span-1 gap-6">
        <GiHamburgerMenu
          onClick={toggleMenuHandler}
          className="md:ml-2 md:text-3xl hidden md:block"
        />
        <p className="flex items-center gap-2 font-bold text-xl">
          <Link to="/" className="flex items-center gap-2">
            <FaYoutube className="text-3xl" />
            YouTube
          </Link>
        </p>
      </div>
      <div className="col-span-10 px-10">
        <form
          className="w-full flex items-center"
          onSubmit={(e) => {
            e.preventDefault();
            const searchUrl = `/search?q=${searchQuery}`;
            window.location.href = searchUrl;
          }}
        >
          <input
            id="search"
            className="w-1/2 border p-2 pl-5 border-gray-400 rounded-l-full bg-black"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSuggestions(true);
            }}
          />
          <button
            className="px-4 py-2 border border-gray-400 rounded-r-full"
            onClick={searchSuggestions}
          >
            <Link to={`search?q=${searchQuery}`}>
              <IoSearch className="text-2xl" />
            </Link>
          </button>
        </form>

        {isSuggestions && (
          <div className="fixed bg-black py-6 px-2 rounded-lg md:w-[38rem] shadow-lg border border-gray-400 md:ml-1 -ml-5">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onClick={() => setIsSuggestions(false)}
                  className="flex gap-4 shadow-black shadow-md items-center py-1 px-3 hover:bg-gray-900 rounded-lg"
                >
                  <Link
                    to={"/search?q=" + s}
                    className="flex items-center gap-2"
                  >
                    <IoSearch className="text-xl" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <CgProfile className="text-4xl" />
      </div>
    </div>
  );
};

export default Head;
