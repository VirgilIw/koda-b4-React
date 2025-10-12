import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, email, logOut } = React.useContext(AuthContext);

  return (
    <nav className="fixed z-50 grid grid-cols-2 w-full bg-black h-20">
      <div className="flex items-center px-20 gap-10 text-white">
        <img src="/Frame 13.png" alt="logo" />
        <Link to="/" className="border-b border-b-[#ff8906]">
          Home
        </Link>
        <Link to="/product">Product</Link>
      </div>
      <div className="flex gap-6 ml-auto pr-10">
        <input type="text" className="border hidden" />
        <Button className="cursor-pointer">
          <img src="/Search.png" alt="search" />
        </Button>
        <Button>
          <img src="/ShoppingCart.png" alt="cart" />
        </Button>

        {isLoggedIn ? (
          <>
            <Button className="border border-white my-4 px-8 rounded-md text-white hover:bg-white hover:text-black">
              {email}
            </Button>
            <Button
              className="bg-red-500 my-4 px-8 rounded-md text-white hover:bg-red-600"
              onClick={() => {
                logOut();
                navigate("/login");
              }}
            >
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Button
              className="border border-white my-4 px-8 rounded-md text-white hover:bg-white hover:text-black"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </Button>
            <Button
              className="bg-[#ff8906] my-4 px-8 rounded-md hover:bg-[#e07b00]"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
