import { FaSearch } from 'react-icons/fa'
import { IoCartOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
// import { Link } from 'react-router-dom'
import { Button, ButtonOutline } from '../common/Button';

const Navbar = () => {
    return (
        <nav className='flex gap-5 justify-between items-center p-3 shadow-lg'>
            <div className='flex w-7/8 mx-auto  items-center gap-5'>
                <h1 className='font-bold text-2xl'>Udemy</h1>
                <small>Explore</small>
                <div className='w-full flex items-center gap-2 p-2 border-2 border-gray-600 rounded-full outline-none'>
                    <div><FaSearch size={12} color='gray'/></div>
                    <form className='w-full'>
                        <input type='search' placeholder='Search for anything' className='outline-none w-full' />
                    </form>
                </div>
            </div>
            <div className='flex items-center gap-5 w-full'>
                <ul className='flex gap-5'>
                    <li className='hover:text-purple-900'><a href={"https://www.udemy.com/pricing/"} className='text-sm'>Plans & Pricing</a></li>
                    <li className='hover:text-purple-900'><a href={"https://business.udemy.com/request-demo-mx/"} className='text-sm'>Udemy Business</a></li>
                    <li className='hover:text-purple-900'><a href={"https://www.udemy.com/teaching/?ref=teach_header"} className='text-sm'>Teach on Udemy</a></li>
                </ul>
                <div className='flex items-center gap-2'>
                    <div><IoCartOutline size={22} /></div>
                    <ButtonOutline text="Log in"/>
                    <Button text={"Sign up"}/>
                    <ButtonOutline text={<TfiWorld size={15}/>}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
