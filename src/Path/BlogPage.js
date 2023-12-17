import React from 'react'


function BlogPage() {
  return (
    <>
   
    

    <h1 className='text-center text-5xl py-8 font-medium font-serif'>Blog</h1>

    <div className=' justify-center items-center sm:py-5'>
     <div className='blogbox sm:grid sm:grid-cols-3 py-5 px-2 mx-10 sm:space-x-4 '>
     <div className='blog px-5 py-5 shadow-2xl w-fit h-auto  '> 

      
      
        
         <div className=' absolute  my-24 '>
            <h1 className='text-3xl lg:text-5xl font-medium text-blue-400 '>Tilicho Lake</h1>
            <p className='text-yellow-300 lg:text-1xl px-2  ' >Adventure,Beautiful,Fun </p>
        </div> 
        <img src="tilicholake.jpg" className='w-96' alt="" />

        
       </div>
       <div className='blog px-5 py-5 shadow-2xl w-fit h-auto my-2'> 

      
      
        
         <div className=' absolute my-14'>
            <h1 className='text-3xl lg:text-4xl text-black font-bold '>WORDCAMP</h1>
            <p className='text-black lg:text-2xl px-2 font-bold ' >experience</p>
        </div> 
        <img src="wordcamp1.jpg" className='w-96' alt="" />

        
       </div>
       
        
        
      
  </div> 

     </div>
    
        
        
      
   
  
    
    </>
  )
}

export default BlogPage
