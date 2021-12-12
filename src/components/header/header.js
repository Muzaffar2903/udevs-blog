import React from "react";
import "./header.css";
import logo from "./img/udevs-logo.svg";
import { Link } from "react-router-dom";
import AuthPanel from "../../login";

export default function Headers() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header-logo" alt="logo" />
      </Link>

      <AuthPanel></AuthPanel>
    </div>
  );
}
