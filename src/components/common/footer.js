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
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current"
              >
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <p className="mt-2">
                The Cake Factory
                <br />
                A reliable home made bakery
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
                  <span className={`transform transition-transform ${activeAccordion === 0 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`${activeAccordion === 0 ? 'block' : 'hidden'} mt-2 space-y-2 mb-4`}>
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
                  <span className={`transform transition-transform ${activeAccordion === 1 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`${activeAccordion === 1 ? 'block' : 'hidden'} mt-2 space-y-2 mb-4`}>
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
                  <span className={`transform transition-transform ${activeAccordion === 2 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <div className={`${activeAccordion === 2 ? 'block' : 'hidden'} mt-2 space-y-2 mb-4`}>
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
              <p>Copyright {new Date().getFullYear()} - All rights reserved by The Cake Factory</p>
            </aside>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
