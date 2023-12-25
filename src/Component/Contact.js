import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tfz2n7s', 'template_778zljc', form.current, '_XPFV5O5lLGIBNNch')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
    
    <div className='contactiner'>
    <div className='bg-black sm:py-3 '>
    <h1 id='contact' className='text-5xl font-medium  text-white text-center sm:max-auto font-serif'>Contact</h1>

    </div>
    

        
        <div className="containerinfo  flex justify-center items-center sm:justify-end">
        <img src="contact.jpg" className='w-full h-auto sm:hidden block' alt="" />


       
       
       <div className="right md:border-4 absolute px-5 py-2 md:-translate-x-20 md:rounded-xl ">
            
                
           <form ref={form} onSubmit={sendEmail} className=' flex flex-col lg:h-72 lg:py-1'>
           <input type='text' placeholder='Name' name='to_name' className='border-2 rounded-xl  px-4  my-1 lg:py-2  outline-blue-900 shadow-lg'></input>
            
            <input type='email' placeholder='Email' name='user_name' className='border-2 rounded-xl px-4 my-2 lg:py-2 outline-blue-900 shadow-lg '></input>

            <textarea placeholder='message' name='message' rows={4}  className='textarea rounded-xl  px-2 outline-blue-500 shadow-lg '></textarea>
          
            <button className='bg-blue-800 rounded-xl py-2 px-3 text-white font-medium hover:bg-blue-900 mt-2 lg:mt-5'>Send</button>
           
           </form>
           <div className='flex  space-x-3 sm:space-x-10 sm:pl-3  text-white font-medium'>
                <p>98463937714</p>
                <h1><span>ksubbagale@gmail.com</span></h1>
            </div>
            
        </div>
      
            

           
            <img src="contactwide.jpg"  className='hidden sm:block' alt="" />

        

            
            
        
            
            
            
        </div>
      
    </div>
    </>
  )
}
