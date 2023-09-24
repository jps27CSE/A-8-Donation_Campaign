import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const params = useParams();
  const data = useLoaderData();
  const paramInt = parseInt(params.id);
  const Details = data.find((singleData) => singleData.id === paramInt);

  const { picture, price, description, title, text_button_bg_color } = Details;

  return (
    <div
      className="max-w-6xl mx-auto mt-10 mb-5 relative"
      style={{ position: "relative" }}
    >
      <img src={picture} alt="picture" className="w-[1220px] h-[500px]" />
      <div
        className="bg-black w-full h-[60px] opacity-50 absolute"
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          maxWidth: "100%",
          height: "70px",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          maxWidth: "100%",
        }}
      >
        <button
          className="btn btn-primary"
          style={{ backgroundColor: text_button_bg_color, border: "none" }}
        >
          Donate ${price}
        </button>
      </div>
    </div>
  );
};

export default DonationDetails;
