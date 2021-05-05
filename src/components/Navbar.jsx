import { useState } from 'react'
import lighthouse from '../lighthouse.svg'

const Navbar = () => {
    const [open,setOpen] = useState(false);
    // const [active, setActive] = useState("#homeText"); Set active navbar option

    const onClickBurger = () => {
        setOpen(!open);
    }
    return (
        <div className="navbar flex flex-wrap justify-between ">
            <img src={lighthouse} className="h-16 m-6 ml-12"/>
            <button type="button" className="block lg:hidden m-6" onClick={onClickBurger}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {open && (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                )}
                {!open && (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
            </svg>
        </button>
            <ul className={`m-6 mr-12 lg:flex ${  open ? "block" : "hidden" } `}>
                <li><a href="#home" className="m-3 text-xl hover:text-indigo-700 font-semibold ">Home</a></li>
                <li><a href="#about" className="m-3 text-xl hover:text-indigo-700 font-semibold">About</a></li>
                <li><a href="#team" className="m-3 text-xl hover:text-indigo-700 font-semibold">Team</a></li>
                <li><a href="#" className="m-3 text-xl hover:text-indigo-700 font-semibold">Downloads</a></li>
            </ul>
        </div>
    )
}

export default Navbar
