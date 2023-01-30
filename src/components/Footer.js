import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className="py-4 text-center bg-gray-300 text-black"> &copy; {year} derechos reservados.</div>;
};

export default Footer;
