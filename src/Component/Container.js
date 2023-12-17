import React from 'react'

export default function Container() {
  return (
    <>
    <div className='Section flex flex-col-reverse'>
      <img src="background3.jpg" className='hidden sm:block ' alt="" />

        <div className='left sm:absolute  sm:mx-5 sm:h-52  py-14 lg:h-80 lg:w-2/4'>
            
                <h1 className='font-medium text-5xl text-center text-blue-900 pl-2 '>KESHAB BAGALE</h1>
                <p className='text-center py-5 font-medium text-black-900 pl-2'>Developer,Graphic Designer, Photographer</p>
                <div className='icon space-x-2 text-center'>
                < a href='keshav_cv.pdf'><button className='bg-black text-white w-auto rounded-2xl px-3 py-1 hover:scale-105 transition duration-400'>Download CV</button>
</a>
                  <button className='bg-red-700 text-white w-auto rounded-2xl px-2 py-1 hover:scale-105 transition duration-400'>Hire me</button>
                </div>
                <div className='icons'>
                 
                
                </div>
           
            </div>
            <div className='right'>
            <img src="bagale1.jpg" className='w-full h-auto sm:hidden block' alt="" />

        </div>
      
    </div>
    <div className="section1 text-center w-full h-auto sm:w-4/5 sm:mx-24 ">
      <h2  id="about" className='text-5xl text-rose-950 font-medium sm:py-5 font-serif'>About me</h2>
      <p className='px-10 py-5 mt-2 text-[18px] leading-relaxed font-sans'>
      Hi! I'm Keshab Bagale a dedicated and passionate BCA student with an expanded interest in JavaScript, the React framework, and networking. As an emerging front-end developer, I've done several practice-based projects to sharpen my skills.
When I’m not engaged in coding, I'm capturing moments through my lens. Photography is my creative outlet, allowing me to tell compelling stories through captivating visuals. Beyond that, I love basketball and football, finding joy and inspiration on the court or field.
Hailing from Syangja, Nepal, I earned a commendable 3.10 CGPA during my high school years. Continuing my pursuit of knowledge, I furthered my education at Crimson College of Technology in Butwal.
My passion for creativity extends beyond tech I thrive in editing, design, and any avenue that calls for innovative thinking. I firmly believe in the importance of time and karma; acting upon your aspirations without delay and cultivating a structured routine.
Engagement with communities like WordPress Nepal and Cyber Security Nepal fuels my inspiration. I'm constantly seeking new avenues to grow and learn, both personally and professionally.
Feel free to connect with me on social media for insights, suggestions, or just a friendly chat. Let's inspire each other and create something extraordinary!

        
        </p>
      <div className="slider bg-slate-800 h-96 flex flex-col-reverse sm:flex-row justify-center item-center sm:justify-between sm:grid sm:grid-cols-2 ">
        <div className="right text-white text-center py-5  sm:pl-14 sm:mt-20 ">
         <h1 className='text-3xl sm:text-4xl font-light'>Photography</h1>
         <p className='py-1 px-2 font-light'>Create hidden stories</p>

        </div>
        <div className="left ">
          <img src="pokhara.jpg" className=' mx-auto w-3/4 sm:my-20 sm:-translate-x-14  shadow-2xl ' alt="" />
        </div>
      </div>

    </div>
    

    
    <div className=' py-6 bg-slate-800 h-96 '>
    <h1 className='text-4xl font-medium text-center text-white font-serif '>Certificate</h1>
    <div>
      <img src="certificate.jpg" className='w-96 border-2 rounded-xl mx-auto my-8' alt="" />
    </div>
    
    </div>
     

    </>
    
  )
}




