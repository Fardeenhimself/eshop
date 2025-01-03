import {
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  Home,
  Gift,
  CakeSlice,
  ShoppingCart,
  User,
  ChevronDown,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = ({ toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlavorMenuOpen, setIsFlavorMenuOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    fetch(`http://192.168.1.6:8000/product?name=${e.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        setSearch(data);
        setQuery(e.target.value);
      });
  };

  const handleSeeMore = () => {
    router.push(`/search-results?query=${query}`); // Navigates to the search results page with the query param
  };

  return (
    <>
      <header className={`sticky top-0 z-50`}>
        {/* First Navbar - will be hidden on scroll */}
        <nav className={`bg-slate-700 border-gray-200 `}>
          <div className="flex flex-wrap justify-between items-center max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo.svg" className="h-8" alt="logo" />
              <span
                href="#"
                className="self-center text-2xl font-semibold whitespace-nowrap"
              >
                <span className="text-purple-700 ">FM</span>{" "}
                <span className="text-green-700 ">Cake Fair</span>
              </span>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-white hover:text-pink-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* Mobile Menu */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } w-full sm:hidden mt-4 border-t border-gray-600 pt-4`}
            >
              {/* <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  onInput={handleSearch}
                  className="p-2 border border-gray-600 rounded-lg"
                />
              </div> */}
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <a
                    href="#"
                    className="text-center py-2 text-sm text-white hover:text-pink-500 border border-gray-600 rounded-lg"
                  >
                    FAQ's
                  </a>
                  <a
                    href="#"
                    className="text-center py-2 text-sm text-white hover:text-pink-500 border border-gray-600 rounded-lg"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="flex justify-center space-x-6 pt-2 border-t border-gray-600">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook
                      className="text-white hover:text-blue-600"
                      size={20}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram
                      className="text-white hover:text-pink-500"
                      size={20}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      className="text-white hover:text-blue-700"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div
              className={`flex-row items-center space-x-6 rtl:space-x-reverse hidden  sm:ml-auto  sm:flex`}
            >
              <a
                href="#"
                className="text-sm text-white hover:underline hover:text-pink-500"
              >
                FAQ's
              </a>
              <a
                href="#"
                className="text-sm text-white hover:underline hover:text-pink-500"
              >
                Contact Us
              </a>
              <span className="text-white">|</span>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    className="text-white hover:text-blue-600"
                    size={20}
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    className="text-white hover:text-pink-500"
                    size={20}
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin
                    className="text-white hover:text-blue-700"
                    size={20}
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Second Navbar - will be sticky */}
        <nav className="bg-white  antialiased hidden lg:block">
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <ul className="flex items-center justify-start gap-6 md:gap-8  sm:justify-center">
                  <li>
                    <a
                      href="#"
                      className="flex text-sm font-medium text-gray-900 hover:text-pink-500"
                    >
                      Home
                    </a>
                  </li>
                  <li className="shrink-0 relative">
                    <button
                      onMouseOver={() => setIsFlavorMenuOpen(true)}
                      onMouseLeave={() => setIsFlavorMenuOpen(false)}
                      className="flex items-center text-sm font-medium text-gray-900 hover:text-pink-500 h-10"
                    >
                      Cake By Flavor
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {/* Desktop Dropdown */}
                    {isFlavorMenuOpen && (
                      <div
                        className="absolute left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                        onMouseOver={() => setIsFlavorMenuOpen(true)}
                        onMouseLeave={() => setIsFlavorMenuOpen(false)}
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                        >
                          Chocolate Cake
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                        >
                          Vanilla Cake
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                        >
                          Strawberry Cake
                        </a>
                      </div>
                    )}
                  </li>
                  <li className="shrink-0">
                    <a
                      href="#"
                      className="flex text-sm font-medium text-gray-900 hover:text-pink-500"
                    >
                      Gift Box
                    </a>
                  </li>
                  <li className="shrink-0">
                    <a
                      href="#"
                      className="flex text-sm font-medium text-gray-900 hover:text-pink-500"
                    >
                      Customized Cake
                    </a>
                  </li>
                  <li className="shrink-0">
                    <a
                      href="#"
                      className="flex text-sm font-medium text-gray-900 hover:text-pink-500"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Search Bar */}
              <div className="relative flex items-center justify-center space-x-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-72 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onInput={handleSearch}
                />

                {search.length > 0 && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl py-4 mt-1 z-10 max-h-auto">
                    {/* Loop through search results and limit to 5 */}
                    {search.slice(0, 5).map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all duration-200"
                      >
                        {/* Product Image */}
                        <img
                          src={item.image}
                          alt={item.product}
                          className="w-16 h-16 object-cover rounded-lg mr-4"
                        />
                        <div className="flex-1">
                          {/* Product Name */}
                          <h4 className="text-sm font-semibold text-gray-800">
                            {item.product}
                          </h4>
                          {/* Product Price */}
                          <p className="text-xs text-gray-500">${item.price}</p>
                        </div>
                        {/* View Button */}
                        <button className="text-sm text-blue-500 hover:underline">
                          View
                        </button>
                      </div>
                    ))}

                    {/* Show "See More" button if more than 5 items */}
                    {search.length > 5 && (
                      <button
                        onClick={handleSeeMore}
                        className="w-full text-center py-2 text-sm font-medium text-blue-500 hover:underline mt-2"
                      >
                        See More
                      </button>
                    )}
                  </div>
                )}
              </div>
              {/* Cart and User Dropdown */}
              <div className="flex items-center lg:space-x-2">
                <button
                  id="myCartButton"
                  type="button"
                  className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900  hover:text-pink-500"
                  onClick={toggleCart}
                >
                  <span className="sr-only ">Cart</span>
                  <svg
                    className="w-5 h-5 lg:me-1 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>
                  <span className="hidden sm:flex">My Cart</span>
                </button>
                {/* User Dropdown */}
                <Link href="/register">
                  <button
                    id="userButton"
                    type="button"
                    className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100  text-sm font-medium leading-none text-gray-900  hover:text-pink-500"
                  >
                    <svg
                      className="w-5 h-5 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <span className="hidden sm:flex">Account</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
          <div className="grid grid-cols-5 gap-1">
            <a
              href="#"
              onClick={() => router.push("/search-results")}
              className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-pink-500"
            >
              <Search size={20} />
              <span className="text-xs">Search</span>
            </a>
            <button
              onClick={() => setIsFlavorMenuOpen(!isFlavorMenuOpen)}
              className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-pink-500 relative"
            >
              <CakeSlice size={20} />
              <span className="text-xs">Flavors</span>
              {/* Dropdown for flavors */}
              {isFlavorMenuOpen && (
                <div className="absolute bottom-full mb-2 w-48 bg-white rounded-md shadow-lg py-1 left-1/2 transform -translate-x-1/2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                  >
                    Chocolate Cake
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                  >
                    Vanilla Cake
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                  >
                    Strawberry Cake
                  </a>
                </div>
              )}
            </button>
            <a
              href="#"
              className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-pink-500"
            >
              <Home size={20} />
              <span className="text-xs">Home</span>
            </a>
            <a
              href="#"
              onClick={toggleCart}
              className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-pink-500"
            >
              <ShoppingCart size={20} />
              <span className="text-xs">Cart</span>
            </a>

            <a
              href="#"
              onClick={() => router.push("/register")}
              className="flex flex-col items-center justify-center py-3 text-gray-600 hover:text-pink-500"
            >
              <User size={20} />
              <span className="text-xs">Account</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
