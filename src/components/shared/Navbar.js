import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";
import { useSelector } from "react-redux";
import LanguageContext from "../context/LanguageContext";
function Navbar(props) {
  const favouritesCounter = useSelector((state) => state.favouriteList.counter);
  const language = useContext(LanguageContext)

  return (
    <div className="navbar bg-sky-900 text-white">
      <div className="flex-1 ">
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>
          NETFLIX
        </h1>
      </Link>

        <div className="indicator mt-2">
          <span className="indicator-item badge badge-primary">
            {favouritesCounter}
          </span>
          <div className="">
            <Link className="mx-auto hover:text-red-500 p-8" to={"/favourites"}>
              Favourites
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li tabIndex="0">
            <p>
              Language
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul className="p-2 bg-sky-900 text-white">
              <li>
                <button onClick={()=>language.onChangeLanguage("en")}>English</button>
              </li>
              <li>
              <button onClick={()=>language.onChangeLanguage("ar")}>Arabic</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="flex">
        <SearchForm />
      </div>
    </div>
  );
}

export default Navbar;
