import React from "react";

const Header = React.memo(() => {
  console.log("header");
  return (
    <header className="fadeIn">
      <div className="container">
        <a href="https://github.com/omkar-28">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/omkar-khatavkar-bb7051117/">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
});

export default Header;
