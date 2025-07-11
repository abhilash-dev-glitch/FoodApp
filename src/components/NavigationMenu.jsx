import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";

function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Keep checking for userId from localStorage
  useEffect(() => {
    const interval = setInterval(() => {
      const storedId = localStorage.getItem("userId");
      setUserId(storedId);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUserId(null);
    setShowDropdown(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">FoodApp</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-black text-lg">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>

          {userId ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 hover:text-orange-600"
              >
                <User size={20} />
                Profile
              </button>
              {showDropdown && (
                <div className="absolute mt-2 right-0 bg-white shadow-md border rounded w-40 text-sm z-50">
                  <Link
                    to={`/users/${userId}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}

          {/* CTA */}
          <button className="ml-4 bg-black text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-600 transition">
            Order Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-white shadow text-black font-medium space-y-4 transition-all duration-300">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          {userId ? (
            <>
              <Link
                to={`/users/${userId}`}
                onClick={() => setMenuOpen(false)}
              >
                View Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          )}

          <button className="block w-full bg-black text-white px-4 py-2 rounded-full">
            Order Now
          </button>
        </div>
      )}
    </header>
  );
}

export default NavigationMenu;
