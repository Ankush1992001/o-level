import React, {useState } from "react"
import LogoImg from "../assets/images/logo.png"
import { LinkData } from "../assets/data/dummydata"
import { NavLink } from "react-router-dom"
import { HiOutlineMenuAlt1 } from "react-icons/hi"


export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='bg-white py-4 text-[#071952] sticky z-50 shadow-md top-0 left-0 w-full' data-aos="fade-right">
        <div className='container flex justify-between items-center'>
          <div className='logo flex items-center gap-4'>
            <a href="https://nielit.gov.in/haridwar/index.php" target="blank">
            <img src={LogoImg} alt='logo' className='h-12' />
            </a>
            <div className='category flex items-center text-xl'>
              <span>'<span className="text-primary">O</span>' Level</span>
            </div>
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-6'>
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className='account flex items-center gap-5'>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1-2LdbI75MX_mHwYruA8j2yVb973zgfza8zEmGBH9XbGDWg/viewform" target="blank"><button className="px-5 py-2 border text-white bg-primary hover:shadow-2xl border-white rounded-md text-sm">Apply</button></a>{" "}
            <button className='open-menu' onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
