import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-base-200 text-base-content p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Branding Section - Always Visible */}
            <aside className="lg:col-span-1">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-40 h-32 shadow-xl rounded-lg "
              />
              <p className="mt-2 font-thin text-sm">
                FM Cake fair is a reliable home made bakery brand. We pride
                ourselves on making real food from natural and premium quality
                ingredients
              </p>
            </aside>

            {/* Customer Service Section */}
            <div className="lg:col-span-1">
              <div className="lg:hidden">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full flex justify-between items-center py-2 border-b border-base-300"
                >
                  <h6 className="footer-title m-0">Customer Service</h6>
                  <span
                    className={`transform transition-transform ${
                      activeAccordion === 0 ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`${
                    activeAccordion === 0 ? "block" : "hidden"
                  } mt-2 space-y-2 mb-4`}
                >
                  <a className="link link-hover block">FAQ's</a>
                  <a className="link link-hover block">Track Order</a>
                  <a className="link link-hover block">Make Payment</a>
                </div>
              </div>
              <div className="hidden lg:block">
                <h6 className="footer-title">Customer Service</h6>
                <div className="flex flex-col space-y-2">
                  <a className="link link-hover">FAQ's</a>
                  <a className="link link-hover">Track Order</a>
                  <a className="link link-hover">Make Payment</a>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-1">
              <div className="lg:hidden">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex justify-between items-center py-2 border-b border-base-300"
                >
                  <h6 className="footer-title m-0">Quick Links</h6>
                  <span
                    className={`transform transition-transform ${
                      activeAccordion === 1 ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`${
                    activeAccordion === 1 ? "block" : "hidden"
                  } mt-2 space-y-2 mb-4`}
                >
                  <a className="link link-hover block">Create a cake</a>
                  <a className="link link-hover block">Contact Us</a>
                  <a className="link link-hover block">Career</a>
                </div>
              </div>
              <div className="hidden lg:block">
                <h6 className="footer-title">Quick Links</h6>
                <div className="flex flex-col space-y-2">
                  <a className="link link-hover">Create a cake</a>
                  <a className="link link-hover">Contact Us</a>
                  <a className="link link-hover">Career</a>
                </div>
              </div>
            </div>

            {/* About Us Section */}
            <div className="lg:col-span-1">
              <div className="lg:hidden">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex justify-between items-center py-2 border-b border-base-300"
                >
                  <h6 className="footer-title m-0">About Us</h6>
                  <span
                    className={`transform transition-transform ${
                      activeAccordion === 2 ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`${
                    activeAccordion === 2 ? "block" : "hidden"
                  } mt-2 space-y-2 mb-4`}
                >
                  <a className="link link-hover block">Our Story</a>
                  <a className="link link-hover block">Terms and Conditions</a>
                  <a className="link link-hover block">Privacy policy</a>
                </div>
              </div>
              <div className="hidden lg:block">
                <h6 className="footer-title">About Us</h6>
                <div className="flex flex-col space-y-2">
                  <a className="link link-hover">Our Story</a>
                  <a className="link link-hover block">Terms and Conditions</a>
                  <a className="link link-hover block">Privacy policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-600 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-red-600 cursor-pointer" />
            </div>
            <aside>
              <p className="font-normal">
                Copyright {new Date().getFullYear()} - All rights reserved by{" "}
                <a href="#" className="font-bold">
                  <span className="text-purple-700">FM</span>{" "}
                  <span className="text-green-700">Cake Fair</span>
                </a>
              </p>
            </aside>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
