import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div className="footerImg mb-2">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img
            alt=""
            src={process.env.PUBLIC_URL + footerLogo}
            // style={{ width: 180 }}
          />
        </Link>
      </div>
      <p>
        INFPlans.com Insurance provides <br />
        innovating visitor insurance <br />
        options for international travelers.
        {/* &copy; {new Date().getFullYear()}{" "}
        <a href="/" rel="noopener noreferrer" target="">
          Astrogyata
        </a>
        .<br /> All Rights Reserved */}
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
};

export default FooterCopyright;
