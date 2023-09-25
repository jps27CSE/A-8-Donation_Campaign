import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const InputValueContext = createContext();

export const useInputValue = () => useContext(InputValueContext);

export const InputValueProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <InputValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputValueContext.Provider>
  );
};

InputValueProvider.propTypes = {
  children: PropTypes.node,
};
