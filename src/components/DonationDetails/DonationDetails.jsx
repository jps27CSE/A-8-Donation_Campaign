import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationData } from "../Utilities/LocalStorage";

const DonationDetails = () => {
  const params = useParams();
  const data = useLoaderData();
  const paramInt = parseInt(params.id);
  const Details = data.find((singleData) => singleData.id === paramInt);

  const { picture, price, description, title, text_button_bg_color } = Details;

  const hadnelDonateButton = () => {
    saveDonationData(paramInt);
  };

  return (
    <>
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
            onClick={hadnelDonateButton}
            style={{ backgroundColor: text_button_bg_color, border: "none" }}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      {/* details  */}
      <div className="max-w-6xl mx-auto  mb-5">
        <div className="mt-16 mx-auto">
          <h1 className="text-4xl font-bold ">{title}</h1>
        </div>
        <div className="mb-28">
          <p className="text-xl  mt-5">{description}</p>
        </div>
      </div>
    </>
  );
};

export default DonationDetails;
