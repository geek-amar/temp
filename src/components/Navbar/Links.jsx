import React from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./Navbar.style";

const Links = (props) => {
  const { classesLink } = useStyle(props);
  return (
    <Link className={classesLink} {...props}>
      {props.children}
    </Link>
  );
};

export default Links;
