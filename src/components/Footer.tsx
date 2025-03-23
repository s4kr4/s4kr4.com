import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 text-center border-t border-gray-800">
      © {year} s4kr4
    </footer>
  );
}

export default Footer;
