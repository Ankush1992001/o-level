import React, { useRef } from "react"
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import job1 from "../components/assets/images/job1.jpg"
import job2 from "../components/assets/images/job2.jpg"
import job3 from "../components/assets/images/job3.jpg"
import job4 from "../components/assets/images/job4.jpg"
import job5 from "../components/assets/images/job5.jpg"
import job6 from "../components/assets/images/job6.jpg"
import job7 from "../components/assets/images/job7.jpg"
import job8 from "../components/assets/images/job8.jpg"


export const Courses = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`
  }
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`
  }

  return (
    <>
      <section className='Job_prospects keyBg1 py-6'>
        <div className='container heading mb-12' data-aos="fade-right">
          <h1 className='text-3xl font-semibold text-[#071952] mt-4'>
            Job <span className="text-primary">prospects</span>
          </h1>
        </div>
        <div className='m-auto' data-aos="fade-up">
          <div className='testimonials container'>
            <button className='next-btn text-white text-center z-10 mr-0' onClick={slideForward}><IoIosArrowRoundForward size={20}/></button>
            <button className='back-btn text-white text-center z-10 ' onClick={slideBackward}><IoIosArrowRoundBack size={20}/></button>
            <div className="slider mr-2">
              <ul ref={slider}>
                <li className="">
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden md:h-48 md:w-48 h-56 w-ful'>
                      <img src={job1} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>User Interface (UI) <br />Designer</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden md:h-48 md:w-48 h-56 w-ful'>
                      <img src={job2} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0 m-3'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>Web Publication <br /> Assistant</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden h-56 md:h-48 md:w-48 w-ful'>
                      <img src={job3} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0 m-3'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>Data <br />Scientist/Analyst</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden h-56 md:h-48 md:w-48 w-ful'>
                      <img src={job4} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0 m-3'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>Office Automation  <br />Assistant</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden h-56 w-ful'>
                      <img src={job5} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0 m-3'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>IoT Application <br /> Integrator</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden h-56 w-ful'>
                      <img src={job6} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0 m-3'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>Junior Python <br /> Developer</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden h-56 w-ful'>
                      <img src={job7} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0 m-3'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>Junior <br /> Programmer</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='box rounded-lg bg-white'>
                    <div className='images rounded-t-lg relative overflow-hidden h-56 w-ful'>
                      <img src={job8} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                      <div className='categ flex gap-4 absolute top-0 m-3'>
                      </div>
                    </div>
                    <div className='text p-3'>
                      <h3 className='text-[#071952] my-1 font-medium text-center'>Lab <br />Demonstrator</h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
