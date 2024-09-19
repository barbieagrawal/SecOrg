import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact-us" className="bg-gray-900 text-white relative z-50 ">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className=" py-5">
            <div className="text-2xl text-center font-montserrat py-10">
                CONTACT US
            </div>
            <div className="hidden sm:block">
            <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
                <span className="text-sm text-gray-400">
                @copyright 2024 SECORG
                </span>
                <div className="flex items-center justify-center gap-4 mb-4">
                <a href="#">
                    <FaInstagram className="text-4xl" />
                </a>
                <a href="#">
                    <FaFacebook className="text-4xl" />
                </a>
                <a href="#">
                    <FaLinkedin className="text-4xl" />
                </a>
                </div>
                <span className="text-sm text-gray-400 ">
                <ul className="flex gap-3">
                    <li className="hover:text-white">Policy</li>
                    <li className="hover:text-white">Terms & Conditions</li>
                </ul>
                </span>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;