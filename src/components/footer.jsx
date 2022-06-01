import React from "react";

function Footer() {
  const thisYear = new Date();
  return (
    <footer>
      <p>Copyright ⓒ {thisYear.getFullYear()} </p>
    </footer>
  );
}
export default Footer;
