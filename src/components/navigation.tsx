import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../config/store";
import { searchMovies } from "../features/movie/slice/movie-slice";

const Navigation = () => {
  const [showInput, setShowInput] = useState<Boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  let [searchParams, setSearchParams] = useSearchParams();

  function searchHandler(e: any) {
    e.preventDefault();
    console.log(e.target[0].value);
    let params = {
      [e.target[0].name]: e.target[0].value,
    };

    if (location.pathname != "sarch") {
      navigate("/search", params);
    }
    {
      setSearchParams(params);
    }
  }
  return (
    <div className="flex p-6 fixed top-0 left-0 z-10 bg-black  w-full md:justify-center">
      <div className="w-full flex w-full  justify-between">
        <div
          onClick={() => navigate("/")}
          className="navbar text-white text-xl"
        >
          <p>Movie APP</p>
        </div>
        <div className=" md:w-2/5 flex justify-end items-center ">
          <div>
            <form onSubmit={searchHandler} action="#">
              <input
                type="text"
                name="search"
                // onKeyUp={searchHandler}
                placeholder="search your movies"
                className={`text-xs text-black transition-all  transition-all duration-300 py-2 px-3 rounded-lg ${
                  showInput
                    ? "w-32 overflow-x-auto "
                    : "w-0  !px-0 overflow-x-hidden"
                } `}
              />
            </form>
          </div>
          <button
            className="text-white md:ml-4 ml-2"
            onClick={() => setShowInput(!showInput)}
          >
            {" "}
            <Icon icon={"iconoir:search"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
