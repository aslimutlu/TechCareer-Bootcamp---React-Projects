import React from "react";

function Navbar() {
  return (
    <>
      <>
        <>
          <title>W3.CSS Template</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\nbody {font-family: "Times New Roman", Georgia, Serif;}\nh1, h2, h3, h4, h5, h6 {\n  font-family: "Playfair Display";\n  letter-spacing: 5px;\n}\n',
            }}
          />
        </>

        {/* Navbar (sit on top) */}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="#home" className="w3-bar-item w3-button">
              <b>BR</b> Architects
            </a>
            {/* Float links to the right. Hide them on small screens */}
            <div className="w3-right w3-hide-small">
              <a href="#projects" className="w3-bar-item w3-button">
                Projects
              </a>
              <a href="#about" className="w3-bar-item w3-button">
                About
              </a>
              <a href="#contact" className="w3-bar-item w3-button">
                Contact
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Navbar;
