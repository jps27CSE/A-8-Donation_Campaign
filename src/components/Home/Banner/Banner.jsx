import { useState } from "react";
import Background from "../../../assets/BannerPic.png";
import { useInputValue } from "../../Context/InputValueContext";

const Banner = () => {
  const { setInputValue } = useInputValue();
  const [searchInputValue, setSearchInputValue] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setInputValue(searchInputValue);
  };

  const handleInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  return (
    <div className="relative">
      <div
        className="relative w-full h-[500px] top-0 left-0  bg-black opacity-30"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center  flex-col">
        <h1
          className="text-black font-bold text-4xl ml-12 lg:ml-0"
          style={{
            color: "black",
            opacity: "100%",
          }}
        >
          I Grow By Helping People In Need
        </h1>
        <div>
          <form className="flex flex-row mt-5" onSubmit={handleSearchSubmit}>
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Search Here"
              className="input input-bordered w-full max-w-xs text-black"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-error text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
