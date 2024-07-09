import React from "react"
import placementImg from "../components/assets/images/placment.png"
import suitableImg from "../components/assets/images/suitable1.png"
import { IoBookSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai"
import { GiBookshelf } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { TfiFiles } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
import { SiMinutemailer } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { GiEarthAmerica } from "react-icons/gi";
import Screenshotinpdf from "../components/assets/images/Screenshotinpdf.png"
import join from "../components/assets/images/joinimg.png"
import pdffile from "../components/assets/O_Level_IT.pdf"

const samI = [
  { code: 'M1-R5.1', title: 'Information Technology Tools and Network Basics' },
  { code: 'M2-R5.1', title: 'Web Designing & Publishing' },
];
const Practical_I = [
  { code: 'MPR-1', title: 'Information Technology Tools and Network Basics' },
  { code: 'MPR-2', title: 'Web Designing & Publishing' },
];
const samII = [
  { code: 'M3-R5.1', title: 'Programming and Problem Solving through Python' },
  { code: 'M4-R5.1', title: 'Internet of Things and its Applications' },
];
const Practical_II = [
  { code: 'MPR-3', title: 'Programming and Problem Solving through Python' },
  { code: 'MPR-4', title: 'Internet of Things and its Applications' },
  { code: 'PJ1-R5.1 ', title: 'Project' },
];

export const About = () => {
  return (
    <>
      <section className='recognitions py-2'>
        <div className='container'>
          <div className='heading text-center py-10' data-aos="zoom-in">
            <h1 className='text-3xl font-semibold text-[#071952]'>Key <span className="text-primary">Features</span></h1>
            <span className='text-sm mt-2 block'></span>
          </div>
          <div className='grid grid-cols-4 gap-5 mt-5 md:grid-cols-1 text-center justify-center'>
            <AboutCard color='bg-[#2D69F0]' icon={<GiBookshelf size={50} className="mx-auto mb-2" />} title='Regular Assessments' />
            <AboutCard color='bg-[#DD246E]' icon={<FaLaptopCode size={50} className="mx-auto mb-2" />} title='Hands-on Practice' />
            <AboutCard color='bg-[#8007E6]' icon={<TfiFiles size={50} className="mx-auto mb-2" />} title='Comprehensive Curriculum' />
            <AboutCard color='bg-[#0CAE74]' icon={<TbTargetArrow size={50} className="mx-auto mb-2" />} title='Clear Learning Objectives' />
            <AboutCard color='bg-[#0CAE74]' icon={<SiMinutemailer size={50} className="mx-auto mb-2" />} title='Engaging Content Delivery' />
            <AboutCard color='bg-[#8007E6]' icon={<GiTeacher size={50} className="mx-auto mb-2" />} title='Expert Faculties' />
            <AboutCard color='bg-[#DD246E]' icon={<GiEarthAmerica size={50} className="mx-auto mb-2" />} title='Interactive Learning Environment' />
            <AboutCard color='bg-[#2D69F0]' icon={<IoBookSharp size={50} className="mx-auto mb-2" />} title='Practical oriented content' />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  )
}
export const AboutCard = (props) => {
  return (
    <div className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `} data-aos="fade-up">
      <div className='icon'>{props.icon}</div>
      <div className='text mt-5'>
        <h4 className='text-lg font-semibold my-3'>{props.title}</h4>
        <p className='text-sm'>{props.desc}</p>
      </div>
    </div>
  )
}

export const AboutContent = () => {
  return (
    <section>
      <div className='heading text-center py-6 mt-9' data-aos="zoom-in">
        <h1 className='text-3xl font-semibold text-primary'>Recognitions</h1>
        <span className='text-sm mt-2 block'></span>
      </div>
      <div className='container flex md:flex-col flex-row'>
        <div className='left w-1/2 md:w-full relative mr-2'>
          <div className='flex md:flex-col py-4 w-full flex-row-reverse keyBg rounded-xl rounded-br-[40px]' data-aos="fade-right">
            <div className='md:w-full'>
              <div className='heading  p-3 md:p-2 md:w-full'>
                <h1 className='text-3xl font-semibold text-[#EBF4F6]'>National</h1>
                <span className='text-[17px] mt-2 block leading-6 text-justify text-[#071952]'>NIELIT 'O' Level certification is recognized for government Jobs and is aligned at level 4 of National Skills Qualifications Framework (NSQF).</span>
                <span className='text-[17px] block leading-6 text-justify mt-8 text-[#071952]'>Curriculum has been designed by academic and industry experts and it equips a candidate with latest skills that meets the industry demand.</span>
              </div>
            </div>
          </div>
        </div>
        <div className='right w-1/2 md:w-full ml-2'>
          <div className='md:w-full'>
            <div className='flex md:flex-col flex-row-reverse md:mt-10 py-4 keyBg1 rounded-xl rounded-bl-[40px]' data-aos="fade-right">
              <div className='md:w-full md:mt-5'>
                <div className='heading p-3 md:p-2 md:w-full'>
                  <h1 className='text-3xl font-semibold text-[#EBF4F6]'>International</h1>
                  <span className='text-[17px] block leading-6 text-justify mt-2 text-[#071952]'>
                    <span className="text-[#EBF4F6] underline">TAIWAN</span><span className="text-[#EBF4F6]"> :</span> The NIELIT 'O' Level qualification is also recognized as equivalent to the TQC Certification by the Taiwan - India HR Coorperation.
                  </span>
                  <span className='text-[17px] mt-4 pb-4 block leading-6 text-justify text-[#071952]'>
                    This recognition is based on the<a href="https://www.nielit.gov.in/sites/default/files/INT_MoU_Taiwan.pdf" target="blank"><span className="text-primary"> MOU</span></a> signed in August 2002 between NIELIT and NICC & SCS.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='container flex md:flex-col md:mt-10 py-4 flex-row keyBg2 rounded-xl rounded-br-[40px]' data-aos="fade-right">
        <div className='left w-1/3 md:w-full mr-4 md:mr-0 p-4 relative' data-aos="zoom-in-right">
          <img src={placementImg} alt='aboutImg' className='rounded-xl' />
        </div>
        <div className='right w-2/3 md:w-full md:mt-5'>
          <div className='heading pr-4 md:p-2 md:w-full mt-8'>
            <span className='text-[17px] mt-3 block leading-6 text-justify text-[#071952]'>'O' level course is a suitable for  government as well as
              private/public sector jobs. After completing the 'O' level, One can also work in banks and other IT companies.
            </span>
            <span className='text-[17px] mt-8 block leading-6 text-justify text-[#071952]'>Placement assistance is provided to all deserving candidates. NIELIT also organizes <span className="text-primary">"Rojgar Mela"</span> to provide ample opportunities to NIELIT students.
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='container flex md:flex-col flex-row-reverse md:mt-10 py-6 keyBg1 rounded-xl rounded-bl-[40px]' data-aos="fade-right">
        <div className='left w-1/3 md:w-full mr-8 md:mr-0 relative py-6 mt-3 p-2' data-aos="zoom-in-right">
          <img src={suitableImg} alt='aboutImg' className='rounded-xl md:mt-0 h-96' />
        </div>
        <div className='right w-2/3 md:w-full md:mt-5'>
          <div className='heading pr-6 pl-4 md:p-2 md:w-full'>
            <h1 className='text-3xl font-semibold text-[#EBF4F6]'>Eligibility</h1>
            <span className='text-[17px] block leading-6 text-justify mt-4'><ul className='my-5 text-[#071952]'>
              <li className='text-lg flex items-center gap-5'>
                <AiOutlineCheck className='text-[#EBF4F6] text-xs' />
                12th PassOut
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[15px] -mt-8' />
                ITI Certificate (One Years) after class 10 with one year of experience post qualification.
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[40px] -mt-32' />
                Successful completion of the second year of a Government recognized polytechnic
                engineering diploma course after class 10, Training of ‘O’ Level course concurrently
                during the third year of the said 3 years Polytechnic engineering diploma course.
                <br />
                The certificate of ‘O’ level will be awarded only after successful completion of the
                polytechnic engineering diploma.
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[15px]' />
                10th pass and certification in the immediate previous NSQF Level Qualification in
                relevant field.
              </li>
              <li className='text-lg flex items-center gap-5 my-2'>
                <AiOutlineCheck className='text-[#EBF4F6] text-[15px]' />
                Relevant Qualification of immediate previous NSQF Level with 2 Years of experience.
              </li>
            </ul></span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className='heading text-center mt-8' data-aos="zoom-in">
        <h1 className='text-3xl font-semibold text-primary'>Course <span className="text-[#071952]">Outline</span></h1>
        <span className='text-[17px] mt-2 block px-4'>4 Compulsory modules + 2 Practical + 1 Project</span>
      </div>
      <div className='container flex md:flex-col flex-row'>
        <div className='left w-1/2 md:w-full relative'>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4 border text-[#071952]" data-aos="flip-right">Semester I</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text font-bold border text-primary">Module Code</th>
                    <th className="px-2 py-2 text font-bold border text-[#071952]">Module</th>
                  </tr>
                </thead>
                <thead >
                  {samI.map((item) => (
                    <tr key={item.code}>
                      <td className="border px-2 py-2 text font-medium text-tartiary">{item.code}</td>
                      <td className="border px-2 py-2 text-tartiary">{item.title}</td>
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          </div>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="px-2 py-2 mb-4 font-bold border text-[#071952]" data-aos="flip-right">Practical I</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                  {Practical_I.map((item) => (
                    <tr key={item.code}>
                      <td className="border px-6 py-2 text font-medium text-tartiary">{item.code}</td>
                      <td className="border px-4 py-2 text-tartiary">{item.title}</td>
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          </div>
        </div>
        <div className='right w-1/2 md:w-full'>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4 border text-[#071952]" data-aos="flip-left">Semester II</h1>
              <table className="w-full table-auto" data-aos="flip-right">
                <thead>
                  <tr >
                    <th className="px-2 py-2 text font-bold border text-primary">Module Code</th>
                    <th className="px-2 py-2 text font-bold border text-[#071952] ">Module</th>
                  </tr>
                </thead>
                <thead >
                  {samII.map((item) => (
                    <tr key={item.code}>
                      <td className="border  text font-medium text-tartiary">{item.code}</td>
                      <td className="border px-2 py-2 text-tartiary">{item.title}</td>
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          </div>
          <div className='my-10 flex flex-col md:flex-row gap-10'>
            <div className="mx-auto text-center">
              <h1 className="font-bold px-2 py-2 mb-4 border text-[#071952]" data-aos="flip-left">Practical II</h1>
              <table className="w-full table-auto" data-aos="flip-left">
                <thead >
                  {Practical_II.map((item) => (
                    <tr key={item.code}>
                      <td className="border px-5 py-2 text font-medium text-tartiary">{item.code}</td>
                      <td className="border px-4 py-2  text-tartiary">{item.title}</td>
                    </tr>
                  ))}
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='container flex md:flex-col flex-row'>
        <div className='left w-1/2 md:w-full relative'>
          <div className='md:w-full'>
            <div className="text-center">
              <div className='my-4 flex flex-col md:flex-row'>
                <div className="mx-auto">
                  <h1 className="text-[18px] font-bold mb-4 border text-primary" data-aos="flip-left">Download PDF</h1>
                  <div className='flex justify-center' data-aos="flip-right">
                    <a href={pdffile} download="pdffile">
                      <img src={Screenshotinpdf} alt=""
                        className='border mb-4 h-96 py-2 px-4 rounded-xl' />
                    </a>
                  </div>
                  <table className="w-full table-auto ">
                    <thead>
                      <tr>
                        <th data-aos="flip-left"><a href={pdffile} download="pdffile" className="px-4 py-2 text font-bold border underline"><button className='px-5 py-2 border text-white bg-primary hover:shadow-2xl border-white rounded-md text-sm'>Download PDF</button></a></th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right w-1/2 md:w-full'>
          <div className='md:w-full'>
            <div className="text-center">
              <div className='my-4 flex flex-col md:flex-row'>
                <div className="mx-auto">
                  <h1 className="text-[18px] font-bold mb-4 border text-primary" data-aos="flip-right">Register</h1>
                  <div className='flex justify-center' data-aos="flip-left">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1-2LdbI75MX_mHwYruA8j2yVb973zgfza8zEmGBH9XbGDWg/viewform" target='blank'>
                      <img src={join} alt=""
                        className='border mb-4 h-96 py-2 px-4 rounded-xl' />
                    </a>
                  </div>
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th data-aos="flip-right"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc1-2LdbI75MX_mHwYruA8j2yVb973zgfza8zEmGBH9XbGDWg/viewform" target='blank'><button className='px-5 py-2 border text-white bg-primary hover:shadow-2xl border-white rounded-md text-sm'>Apply Now</button></a></th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
