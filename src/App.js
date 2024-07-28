
import './App.css';
import Contact from './Component/Contact';
import Container from './Component/Container';
import Navbar from './Component/Navbar';
import Sections from './Component/Sections';
import Footerline from './Component/Footerline';
import { useState } from 'react';




function App() {

  const [bgColor, setBgColor] = useState('white');

  const handleChangeColor =()=>{

    setBgColor(bgColor === 'white' ? 'black' : 'white');

  }

  return (
    <div className= {` ${bgColor === 'white' ? 'bg-white text-black' : 'bg-black text-white text'}`}>
      <Navbar onChangeColor={handleChangeColor} />
      <Container/>
      <Sections/>
      <Contact/>
      <Footerline/>
     
      

      
    </div>
  );
}

export default App;
