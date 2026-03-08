import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Correct component definition in JSX/React
  const NavLink = ({ href, children }) => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setIsMenuOpen(false);
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
      >
        {children}
      </a>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight text-blue-900">
          JENIELYN <span className="text-blue-600">ALIM</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          {/* <NavLink href="#contact">Contact</NavLink> */}
        </div>

        <button
          className="md:hidden text-gray-700 hover:text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 px-6 flex flex-col space-y-5 text-lg font-medium">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          {/* <NavLink href="#contact">Contact</NavLink> */}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
