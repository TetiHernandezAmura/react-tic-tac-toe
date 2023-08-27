import PropTypes from "prop-types";
import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    setValue("X");
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
};

export default Square;
