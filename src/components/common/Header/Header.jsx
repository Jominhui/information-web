import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header-content">홈</div>
        </Link>
        <Link to="/info">
          <div className="header-content">소개</div>
        </Link>
        <Link to="/project">
          <div className="header-content">프로젝트</div>
        </Link>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
