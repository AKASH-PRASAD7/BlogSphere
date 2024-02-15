import React from "react";
import { Container, LogoutBtn } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.authSlice.status);

  return <div>header</div>;
};

export default Header;
