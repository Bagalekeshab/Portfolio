import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

export default function Sections() {
  return (
    <div className='section1 '>
        
        
        <div className='container '>

        <div className="skill-title">
        <h1 id="skill" className='text-5xl font-medium text-center py-6 font-serif'>Skill</h1>
        </div>
        <div className="skill-experience-box px-3 sm:py-4 py-3 sm:grid sm:grid-cols-2 sm:space-x-10 ">
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='sm:pl-11 pl-3 font-medium'>HTML/CSS</p>
                
                </div>
                <div className="skill-line pl-2 sm:pl-10">
                    <ProgressBar completed={93}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='pl-2 font-medium'>Javascript</p>
                
                </div>
                <div className="skill-line pl-1">
                    <ProgressBar completed={70}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='pl-2 font-medium'>Python</p>
                
                </div>
                <div className="skill-line pl-1">
                    <ProgressBar completed={15}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='pl-2 font-medium'>PHP</p>
                
                </div>
                <div className="skill-line pl-1">
                    <ProgressBar completed={50}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='pl-2 font-medium'>WordPress</p>
                
                </div>
                <div className="skill-line pl-1">
                    <ProgressBar completed={50}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='pl-2 font-medium'>Photoshop</p>
                
                </div>
                <div className="skill-line pl-1">
                    <ProgressBar completed={95}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='pl-2 font-medium'>Video Editing</p>
                
                </div>
                <div className="skill-line pl-1">
                    <ProgressBar completed={90}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            <div className="skill-items-box my-3">
                <div className="skill-info flex justify-between">
                <p className='pl-2 font-medium'>Networking</p>
                
                </div>
                <div className="skill-line pl-1">
                    <ProgressBar completed={80}
                        bgColor='rgb(20 184 166)'
                        animateOnRender={true}/>
                </div>
                
            </div>
            
           
            
                
                
        </div>
            

        </div>
        
        
         <div className='py-14'>
         <h1 className='text-5xl  font-medium text-center sm:max-auto font-serif'>Work with Team</h1>
        <div className='Logo py-10'>
          <p className='text-center text-3xl'>Yatri</p>

        </div>
        
         </div>
         <div className='project py-5'>
            
        <h1 className='text-5xl font-medium text-center sm:max-auto py-5 font-serif'>Project</h1>
        
        <div className='Projects flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:px-20 py-5 '>
            
            <div className=' shadow-2xl  w-2/3 sm:w-52 sm:h-80 mx-auto my-5 bg-black rounded-2xl hover:scale-110 transition duration-400 '>
            <div className='box px-1 py-1  '>
                <img src="EV Website.jpg" className='w-full h-auto rounded-xl ' alt="" />
                <h1 className='text-xl font-medium my-4 text-center text-white'>Ev Website</h1>
                <div className='space-x-6 pl-2 '>
                <button className='bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2 hover:bg-gray-100 translate-x-4 '>Git hub</button>
                <button className = 'bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2  hover:bg-gray-100'>Demo</button>
                </div>
            </div>
            </div>
            <div className=' shadow-2xl  w-2/3 sm:w-52 sm:h-80 mx-auto my-5 bg-black rounded-2xl hover:scale-110 transition duration-400'>
            <div className='box px-1 py-1'>
                <img src="microsoft.jpg" className='w-full h-auto rounded-xl' alt="" />
                <h1 className='text-xl font-medium my-4 text-center text-white'>Microsoft Clone</h1>
                <div className='space-x-6 pl-2'>
                <a href='https://github.com/Bagalekeshab/Microsoft'><button className='bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2 hover:bg-gray-100 translate-x-4 '>Git hub</button>
</a>
                    <button className = 'bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2  hover:bg-gray-100'>Demo</button>
                </div>
            </div>
            </div>
            <div className=' shadow-2xl  w-2/3 sm:w-52 sm:h-80 mx-auto my-5 bg-black rounded-2xl hover:scale-110 transition duration-400 '>
            <div className='box px-1 py-1'>
                <img src="movie.jpg" className='w-full h-auto rounded-xl' alt="" />
                <h1 className='text-xl font-medium my-4 text-center text-white'>Movie Library (API)</h1>
                <div className='space-x-6 pl-2'>
                <a href='https://github.com/Bagalekeshab/Movielibrary-Open-Movie'><button className='bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2 hover:bg-gray-100 translate-x-4 '>Git hub</button>
</a>
                <button className = 'bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2  hover:bg-gray-100'>Demo</button>
                </div>
            </div>
            </div>
            <div className=' shadow-2xl  w-2/3 sm:w-52 sm:h-80 mx-auto my-5 bg-black rounded-2xl hover:scale-110 transition duration-400 '>
            <div className='box px-1 py-1'>
                <img src="expensestracker.jpg" className='w-full h-auto rounded-xl' alt="" />
                <h1 className='text-xl font-medium my-4 text-center text-white'>Expenses Tracker</h1>
                <div className='space-x-6 pl-2'>
                <button className='bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2 hover:bg-gray-100 translate-x-4 '>Git hub</button>
                <button className = 'bg-sky-400 text-black font-medium w-fit px-2 py-1 rounded-xl my-2  hover:bg-gray-100'>Demo</button>
                </div>
            </div>
            </div>
            
            
            
            
            
           
        </div>
         </div>

        
      
    </div>
  )
}
