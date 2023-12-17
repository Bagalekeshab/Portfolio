import React from 'react'

export default function Footer() {
  return (
    
        <div className="section py-9 sm:px-8 sm:flex sm:justify-between items-center sm:items-center sm:flex-row flex flex-col bg-black">
            <div className='logotitle'>
                <h1 className='cursor-pointer'><img src="logo1.png" className='h-36 bg-cyan-800' alt="" /></h1>
            </div>
            <div className='social-icons mt-14 text-white'>
                <div className='flex space-x-3'>
                <a href='https://www.linkedin.com/in/keshab-bagale-5bb279227/'><img src="https://icongr.am/entypo/linkedin-with-circle.svg?size=35&color=ffffff" className='hover:scale-110 transition duration-400' alt="" /></a>
                <a href='https://www.instagram.com/_kaysuv_/'><img src="https://icongr.am/entypo/instagram-with-circle.svg?size=35&color=ffffff" className='hover:scale-110 transition duration-400' alt="" /></a>
                <a href='https://github.com/Bagalekeshab'><img src="https://icongr.am/entypo/github-with-circle.svg?size=35&color=ffffff" className='hover:scale-110 transition duration-400' alt="" /></a>
                <a href='https://www.facebook.com/Bagale11'><img src="https://icongr.am/entypo/facebook-with-circle.svg?size=35&color=ffffff" className='hover:scale-110 transition duration-400' alt="" /></a>
                <a href='https://mail.google.com/mail/u/0/#inbox'><img src="https://icongr.am/entypo/mail-with-circle.svg?size=35&color=ffffff" className='hover:scale-110 transition duration-400' alt="" /></a>
                </div>
                <div className="copyright py-2">
                    <span className='text-white'>@Copyright All rights reserved. </span>
                </div>

            </div>
            <div className='connect mt-14 text-xl font-medium sm:-translate-y-4 text-white'>
                <h1 className='hover:scale-105 transition cursor-pointer'>About Us</h1>
                <h2 className='hover:scale-105 transition cursor-pointer'>Contact Us</h2>

            </div>
            

        </div>
   
  )
}

