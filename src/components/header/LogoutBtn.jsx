import React from "react";
import { useDispatch } from "react-redux";
import { logout, error } from "../../store/features/auth";
import authService from "../../appwrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    authService
      .logout()
      .then(() => dispatch(logout()))
      .catch((err) => dispatch(error(err.message)));
  };

  return (
    <button className="p-2 bg-black hover:bg-red-600 text-white rounded-xl font-semibold">
      Logout
    </button>
  );
};

export default LogoutBtn;
