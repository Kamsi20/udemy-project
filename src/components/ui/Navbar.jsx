import { FaSearch } from 'react-icons/fa'
import { IoCartOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { Link } from 'react-router-dom'
import { Button, ButtonOutline } from '../common/Button';
import Login from './auth/Login';


const Navbar = () => {
    return (
        <div className='shadow-lg fixed top-0 left-0 w-full h-[80px] bg-white z-50 shadow-md'>
            <nav className=' lg:w-[1300px] mx-auto flex gap-5 justify-between items-center p-3'>
                <div className='flex w-7/8 mx-auto  items-center gap-5'>
                    <Link to={"/"} ><img src='public\logo.png' alt='img'className='w-45 ' /></Link>
                    <small>Explore</small>
                    <div className='w-full flex items-center gap-2 p-2 border-1 border-gray-600 rounded-full outline-none hover:opacity-85'>
                        <div><FaSearch size={12} color='gray' /></div>
                        <form className='w-full '>
                            <input type='search' placeholder='Search for anything' className='outline-none w-full' />
                        </form>
                    </div>
                </div>
                <div className='flex items-center gap-5 w-full'>
                    <ul className='flex gap-5'>
                        <li className='hover:text-purple-900'><a href={"https://www.udemy.com/pricing/"} className='text-sm'>Plans & Pricing</a></li>
                        <li className='hover:text-purple-900'><a href={"https://business.udemy.com/request-demo-mx/"} className='text-sm'>Kamsi Business</a></li>
                        <li className='hover:text-purple-900'><a href={"https://www.udemy.com/teaching/?ref=teach_header"} className='text-sm'>Teach on Kamsi</a></li>
                    </ul>
                    <div className='flex items-center gap-2'>
                        <div><IoCartOutline size={22} /></div>
                        <Link to={"login"} ><ButtonOutline text="Log in " /></Link>
                        <Link to={"signup"}><Button text={"Sign up"} /></Link>
                        <ButtonOutline text={<TfiWorld size={15} />} />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
