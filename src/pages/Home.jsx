import React from "react"
import heroImg from "../components/assets/images/hero1.png"
import heroImgback from "../components/assets/images/hero-shape-purple.png"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa"
import { About } from "./About"
import { Courses } from "./Courses"
import { Instructor } from "./Instructor"
import { Blog } from "./Blog"
import { GiArchiveRegister } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai"

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Instructor />
      <Courses />
      <Blog />
    </>
  )
}
export const HomeContent = () => {
  return (
    <>
      <section className='keyBg1 py-8 h-[92vh] md:h-full'>
        <div className='container'>
          <div className='flex items-center justify-center md:flex-col'>
            <div className='left w-1/2 text-[#071952] md:w-full' data-aos="fade-right">
              <h1 className='text-5xl leading-tight text-[#071952] font-semibold'>
                '<span className="text-white">O</span>' Level</h1>
              <h3 className='text-2xl mt-3 '>The objective of the course is to equip <br />a student with necessary skills as per <br /><span className="text-white">following</span> job role.</h3>
              <ul className='my-5'>
                <li className='text-lg flex items-center gap-5'>
                  <AiOutlineCheck className='text-[#EBF4F6]' />
                  User Interface (UI) Designer
                </li>
                <li className='text-lg flex items-center gap-5 my-2'>
                  <AiOutlineCheck className='text-[#EBF4F6]' />
                  Web Designer
                </li>
                <li className='text-lg flex items-center gap-5 my-2'>
                  <AiOutlineCheck className='text-[#EBF4F6]' />
                  Web Publication Assistant
                </li>
                <li className='text-lg flex items-center gap-5 my-2'>
                  <AiOutlineCheck className='text-[#EBF4F6]' />
                  Office Automation Assistant
                </li>
                <li className='text-lg flex items-center gap-5 my-2'>
                  <AiOutlineCheck className='text-[#EBF4F6]' />
                  IoT Application Integrator
                </li>
              </ul>
              <div className='relative text-gray-600 focus-within:text-gray-400 mt-5'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1-2LdbI75MX_mHwYruA8j2yVb973zgfza8zEmGBH9XbGDWg/viewform" target="blank">
                  <button className='bg-white hover:shadow-2xl shadow-md absolute top-1 left-0 z-30 p-2 flex items-center rounded-md'>
                    <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400'>
                      <GiArchiveRegister size={25} />
                    </div>
                    <div className='text flex flex-col items-start px-4'>
                      <span className='text-sm text-black'>Register</span>
                      <span className='text-[12px]'>Now</span>
                    </div>
                  </button>
                  </a>
                </span>
              </div>
            </div>
            <div className='right w-1/2 md:w-full relative'>
              <div className='images relative'>
                <img src={heroImgback} alt='' className=' absolute top-32 left-10 w-96 md:left-10 z-1' data-aos="zoom-in-up" />
                <div className='img h-[85vh] w-full'>
                  <img src={heroImg} alt='' className='h-full w-full object-contain z-20 relative' data-aos="fade-up" />
                </div>
              </div>
              <div className='content'>
                <button className='bg-white shadow-md absolute top-56 left-0 z-30 p-2 flex items-center rounded-md' data-aos="zoom-in-down">
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400'>
                    <BsFillLightningChargeFill size={25} />
                  </div>
                  <div className='text flex flex-col items-start px-4'>
                    <span className='text-sm text-black'>Engaging Content Delivery</span>
                  </div>
                </button>
                <button className='bg-white shadow-md absolute top-80 -right-8 z-30 p-2  md:top-96 md:-right-5 flex items-center rounded-md' data-aos="zoom-in-up">
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400'>
                    <FaUsers size={25} />
                  </div>
                  <div className='text flex flex-col items-start px-4'>
                    <span className='text-sm text-black'>Expert Faculties</span>
                  </div>
                </button>
                <button className='bg-white shadow-md absolute bottom-32  left-0 z-30 p-2 flex items-center rounded-md pr-8' data-aos="zoom-in-up">
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400'>
                    <FaGraduationCap size={25} />
                  </div>
                  <div className='text flex flex-col items-start  px-4'>
                    <span className='text-sm text-black'>Practical oriented content</span>
                  </div>
                </button>
                <button className='bg-white shadow-md absolute top-20 -right-8 z-30 p-2 flex items-center rounded-md' data-aos="zoom-in-down">
                  <div className='icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-indigo-400'>
                    <FaBookReader size={25} />
                  </div>
                  <div className='text flex flex-col items-start px-4'>
                    <span className='text-sm text-black'>Regular Assessments</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
