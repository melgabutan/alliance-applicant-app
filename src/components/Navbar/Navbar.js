import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">
        {/* TODO: Replace Alliance Logo with a Higher Quality Version */}
        <img
          id="alliance-logo"
          src="./assets/images/navbar/alliance-logo.png"
          alt="alliance-logo"
        />
      </a>
      <div className="links-container">
        <a class="nav-links" href="https://www.alliance.com.ph/index.html#">
          Home
        </a>
        <a class="nav-links" href="https://www.alliance.com.ph/about.html">
          About
        </a>
        <a
          class="nav-links"
          href="https://www.alliance.com.ph/it-services.html"
        >
          Services
        </a>
      </div>
      <div id="phone-container">
        <a href="https://www.alliance.com.ph/contact">
          <img
            id="phone-icon"
            src="./assets/images/navbar/phone-icon.png"
            alt="phone-icon"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
