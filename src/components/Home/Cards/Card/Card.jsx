import PropTypes from "prop-types";
const Card = ({ card }) => {
  console.log(card);
  const {
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = card;

  console.log(`bg-${category_bg_color} `);
  return (
    <div
      className="rounded-lg h-[290px] mb-4 "
      style={{ backgroundColor: card_bg_color }}
    >
      <div>
        <img className="w-[270px] h-[190px]" src={picture} alt="" />
      </div>
      {/* category */}
      <div className="p-1 ml-2 mt-2  w-[100px] h-[35px] rounded-lg ">
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
      <div>
        <h1
          className="text-xl font-bold p-2 ml-1"
          style={{ color: text_button_bg_color }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.object.isRequired,
};
