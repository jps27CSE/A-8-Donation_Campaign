import Background from "../../../assets/BannerPic.png";

const Banner = () => {
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
        <div className="flex flex-row mt-5">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs text-black"
          />
          <button className="btn btn-error text-white">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
