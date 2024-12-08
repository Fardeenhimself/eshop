import { Facebook, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-slate-700 border-gray-200">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="h-8" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-pink-500">
              The Cake Factory
            </span>
          </a>
          {/* This container adjusts layout based on screen size */}
          <div className="flex-row items-center space-x-6 rtl:space-x-reverse hidden sm:flex sm:ml-auto">
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
      <nav className="bg-white dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {/* Navigation Links */}
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <li>
                  <a
                    href="#"
                    className="flex text-sm font-medium text-gray-900 hover:text-pink-500 "
                  >
                    Home
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    className="flex text-sm font-medium text-gray-900 hover:text-pink-500"
                  >
                    Cake By Flavor
                  </a>
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
                    className="text-sm font-medium text-gray-900 hover:text-pink-500"
                  >
                    Customized Cake
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 hover:text-pink-500"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Search Bar */}
            <div className="flex items-center justify-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-72 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
            </div>

            {/* Cart and User Dropdown */}
            <div className="flex items-center lg:space-x-2">
              <button
                id="myCartButton"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white hover:text-pink-500"
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
              <button
                id="userButton"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white hover:text-pink-500"
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
