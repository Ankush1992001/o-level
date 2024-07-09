import React from "react"

export const Instructor = () => {
  return (
    <>
      <section className='instructor mb-12 py-6'>
        <div className='container'>
          <div className='heading py-6 text-center w-2/3 m-auto md:w-full' data-aos="zoom-in">
            <h1 className='text-3xl font-semibold text-[#071952]'>Course <span className="text-primary">Fee</span> Structure</h1>
          </div>
          <div className='content grid grid-cols-4 gap-5 md:grid-cols-1'>
            <div className='images rounded-lg relative overflow-hidden h-80 w-ful before:h-80 keyBg before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10' data-aos="fade-up">
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-cente text-center'>
                <h2 className='text-3xl text-[#071952] font-semibold'>Course Fee</h2>
                <span className='text-[18px] mt-2 block text-white'>Rs. 6,000/- per module</span>
              </div>
            </div>
            <div className='images rounded-lg relative overflow-hidden h-80 w-ful keyBg before:h-80 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10' data-aos="fade-up">
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                <h2 className='text-3xl text-[#071952] font-semibold'>Discounts and Waivers</h2>
                <span className='text-[14px] mt-2 block text-white'><span className="text-[15px] text-[#071952] underline-offset-1 font-medium">General/OBC Candidates : </span>50% discount on the course fee to first 20 students in a batch.</span>
                <span className='text-[14px] block text-white'><span className="text-[15px] font-medium text-[#071952] underline-offset-1">SC/ST Candidates :</span>  No course fee (NIL)</span>
              </div>
            </div>
            <div className='images rounded-lg relative overflow-hidden h-80 w-ful keyBg before:h-80 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10' data-aos="fade-up">
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                <h2 className='text-3xl text-[#071952] font-semibold'>Payment Options</h2>
                <span className='text-[18px] mt-2 block text-white'>Course fee can be paid in installments.</span>
              </div>
            </div>
            <div className='images rounded-lg relative overflow-hidden h-80 w-ful keyBg before:h-80 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10' data-aos="fade-up">
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                <h2 className='text-3xl text-[#071952] font-semibold'>Other Fees</h2>
                <span className='text-[18px] mt-2 block text-white'>Registration /Examination /Project Fee Payable Extra</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

