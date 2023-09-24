import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputValueProvider } from "../Context/InputValueContext";

const Root = () => {
  return (
    <div>
      <InputValueProvider>
        <Header />
        <ToastContainer position="bottom-right" />
        <Outlet />
      </InputValueProvider>
    </div>
  );
};

export default Root;
