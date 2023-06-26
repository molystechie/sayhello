import { useState, useEffect } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai/index'


export const Navbar = () => {
    const [nav, setNav] = useState(false); 
    const [color, setColor] = useState('transparent'); 
    const [textColor, setTextColor] = useState('white'); 

    const handleNav =() => setNav(!nav);

    useEffect(() =>{
        // whenever we scroll we want change color 
        const changeColor = () =>{
            if (window.scrollY >= 90){
                setColor('#ffffff')
                setTextColor('#000000')
            }else{
                setColor('transparent')
                setTextColor('#ffffff')
            }
        }
        // listen scroll and run changeColor function
        window.addEventListener('scroll', changeColor);
    },[])
    
  return (
    <section style={{backgroundColor:`${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        {/* <section className="relative z-[4]"> */}
            <nav className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white '>
                    <a href="/molystechie.github.io/#home"  style={{color:`${textColor}`}} className='text-4xl font-bold'>
                    MolysTechie
                    </a>
                <ul style={{color:`${textColor}`}}  className='hidden sm:flex'>
                    <a href="/molystechie.github.io/#home"  className='p-4'>
                        <li>Home</li>
                    </a>
                    <a href="/molystechie.github.io/#about"  className='p-4'>
                        <li>About</li>
                    </a>
                    <a href="/molystechie.github.io/#services"  className='p-4'>
                        <li>Services</li>
                    </a>
                    <a href="/molystechie.github.io/#store"  className='p-4'>
                        <li>Store</li>
                    </a>
                    <a href="/#developer"  className='p-4'>
                        <li>Developer</li>
                    </a>
                    <a href="/molystechie.github.io/#contact"  className='p-4'>
                        <li>Contact Us</li>
                    </a>
            </ul>
    
                {/* Mobile  Menu Button */}
                    <a href={''}>
                        <div onClick={handleNav} className="relative block sm:hidden z-10">
                            {nav ? <AiOutlineClose size={30} style={{color:`${textColor}`, padding:5, fontWeight:900}} className='border-2 border-red-500 rounded-full'  />:<AiOutlineMenu size={30} style={{color:`${textColor}`}} />}
                        </div>
                    </a>
    
                {/* Mobile Menu items */}
                <div className={nav ? 'sm:hidden absolute top-[70px] left-0 right-0 bottom-0 flex justify-center items-center border-t-2 border-white w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-[70px] left-[-100%] right-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-center ease-in duration-300'}>
                    {/* left-[-100%] hide off the screen  */}
                    <ul>
                        <a href="/molystechie.github.io/#home" onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <li>Home</li>
                        </a>
                        <a href="/molystechie.github.io/#about" onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <li>About</li>
                        </a>
                        <a  href="/molystechie.github.io/#services" onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <li>Services</li>
                        </a>
                        <a href="/molystechie.github.io/#store" onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <li>Store</li>
                        </a>
                        <a href="/#developer"  className='p-4'>
                            <li>Developer</li>
                        </a>
                        <a href="/molystechie.github.io/#contact" onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <li>Contact Us</li>
                        </a>
                    </ul>
                </div>
    
            </nav>
        </section>
  )
}
