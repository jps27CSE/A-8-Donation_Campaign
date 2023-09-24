const Card = ({ card }) => {
  return (
    <div className="bg-red-300 rounded-lg h-[290px] mb-4">
      <div>
        <img
          className="w-[270px] h-[190px]"
          src="https://i.ibb.co/LzPjM3w/Rectangle-4287-2.png"
          alt=""
        />
      </div>
      {/* category */}
      <div className="p-1 ml-2">
        <button className="btn btn-primary w-[80px] h-[15px] mt-1">
          Health
        </button>
      </div>
      <div>
        <h1 className="text-xl font-bold text-center">
          Clean water for children
        </h1>
      </div>
    </div>
  );
};

export default Card;
