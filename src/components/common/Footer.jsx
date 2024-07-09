import React from "react"
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className='bg-[#010851] py-5 mt-20 text-white'>
        <div className='container grid grid-cols-2 gap-20 md:grid-cols-1'>
          <div className='logo' data-aos="fade-right">
            <div className="space-y-8">
              <h1 className="text-3xl space-x-3 font-semibold mt-2">About NIELIT</h1>
              <hr />
              <p className="text-justify">The National Institute of Electronics and Information Technology (NIELIT), formerly DOEACC Society, is an autonomous scientific society under the Ministry of Electronics & Information Technology, Government of India. It provides both formal and non-formal education and develops industry-oriented training programs in advanced IECT areas. NIELIT is a premier institution for Examination and Certification in IECT and accredits institutes for IT and Electronics courses in the non-formal sector.</p>
            </div>
          </div>
          {/* contect Items */}
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start" data-aos="fade-right">
            <div className="space-y-7 mt-2">
              <h1 className="text-3xl  space-x-3 font-semibold ">
                Contact Us
              </h1>
              <hr />
              <ul className="space-y-1">
                <li className="text-2xl space-x-3 font-semibold">NIELIT Haridwar</li>
                <li>2nd Floor, Government Polytechnic Building, Plot No. 6C,</li>
                <li>Sector-11, Near Pentagon Mall, SIDCUL, Haridwar,</li>
                <li>Uttarakhand-249403, Phone: 01334 235617, 9368349990.</li><br />
                <li className="text-2xl text space-x-3 font-semibold">NIELIT Dehradun Study Centre</li>
                <li>2nd Floor, Engineer's Bhawan, Near ISBT Dehradun </li>
                <li>Uttarakhand-248002, Phone: 7302602223.</li>
              </ul>
            </div>
          </div>

        </div>
        <br />
        <hr />
        <div className="container flex flex-row sm:flex-col gap-8 sm:items-center justify-between my-4">
          <p className="mt-6">
            Mobile: 9368349990 (Call & WhatsApp) / E-mail: haridwar@nielit.gov.in
          </p>
          <div className="flex items-center space-x-5 mt-4">
            <a href="https://www.instagram.com/nielithdw" target="blank"><FaInstagram className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#E1306C] transition-all duration-300 text-5xl" /></a>
            <a href="https://www.facebook.com/nielithdw" target="blank"><ImFacebook2 className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#1877F2] transition-all duration-300 text-5xl" /></a>
            <a href="https://x.com/nielithdw" target="blank"><RiTwitterXLine className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#1DA1F2] transition-all duration-300 text-5xl" /></a>
            <a href="https://www.linkedin.com/in/nielithdw/" target="blank"><FaLinkedinIn className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#0077B5] transition-all duration-300 text-5xl" /></a>
            <a href="https://www.youtube.com/@NIELITHaridwar" target="blank"><IoLogoYoutube className="w-8 cursor-pointer hover:-translate-y-1 hover:text-[#FF0000] transition-all duration-300 text-5xl" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
