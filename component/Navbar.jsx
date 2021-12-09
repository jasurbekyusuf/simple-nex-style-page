import NavbarText from "./NavbarText";
function Navbar() {
  return (
    <div className="Navabr">
      <nav>
        <div className="NavbarContentOne">
          <div className="NavContentTop">
            <div>
              <img src="Hamburger.jpg" alt="" />{" "}
            </div>
            <div>
              <img src="Logo.jpg" alt="" />
            </div>
            <div className="NavbarRightIcons">
              <img src="MagnifyingGlass.jpg" alt="" />
              <img src="BookmarkSimple.jpg" alt="" />
              <img src="User.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="NavbarContentTwo">
          <NavbarText />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
