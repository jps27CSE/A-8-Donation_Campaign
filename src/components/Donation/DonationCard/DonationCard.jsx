import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  console.log(donation);
  const {
    picture,
    category,
    title,
    price,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = donation;
  return (
    <div
      className="mb-5 w-[550px] mr-5 rounded-lg flex flex-row"
      style={{ backgroundColor: card_bg_color }}
    >
      <div>
        <img className="w-[200px] h-[190px]" src={picture} alt="picture" />
      </div>

      <div>
        <div className="p-1 ml-2 mt-2  w-[100px] rounded-lg ">
          <p
            className="text-center rounded-lg font-bold "
            style={{
              backgroundColor: category_bg_color,
              color: text_button_bg_color,
            }}
          >
            {category}
          </p>
        </div>
        <div className="p-2 text-2xl font-bold ml-2">{title}</div>
        <div>
          <p
            className="p-2 ml-2 font-bold"
            style={{ color: text_button_bg_color }}
          >
            ${price}
          </p>
        </div>
        <div>
          <Link to={`/donation-details/${donation.id}`}>
            <button
              className="btn ml-3 text-white"
              style={{ backgroundColor: text_button_bg_color, border: "none" }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

DonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};
