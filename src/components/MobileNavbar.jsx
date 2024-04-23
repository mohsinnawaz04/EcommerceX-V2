import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [flag, setFlag] = useState(false);
  const navigationDiv = useRef(null);

  const amIHidden = flag ? "flex" : "hidden";

  const handleClick = () => {
    setToggle((prev) => !prev);

    const mobileNav = navigationDiv.current;
    if (!flag) {
      mobileNav.style.transform = "translateX(0)";

      setFlag((prev) => !prev);
    } else {
      mobileNav.style.transform = "translateX(26rem)";

      setFlag((prev) => !prev);
    }
  };

  return (
    <>
      <div id="main">
        <button
          id="hamburger-menu"
          onClick={handleClick}
          className={toggle && "toggle"}
        >
          <li className="top-bar" />
          <li className="middle-bar" />
          <li className="bottom-bar" />
        </button>
      </div>
      <div id="mobile-nav" ref={navigationDiv} className={amIHidden}>
        <div id="navigation-div">
          <div className="text-start ul">
            <ul>
              <li className="hover:cursor-pointer">
                <Link></Link>
              </li>
              <li className="hover:cursor-pointer">Products</li>
              <li className="hover:cursor-pointer">About</li>
              <li className="hover:cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
