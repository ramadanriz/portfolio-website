import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { menuLinks } from '../constant'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsMoonStars, BsSun } from 'react-icons/bs'

const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("business")
        } else {
          setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    return (
        <div className='navbar justify-between bg-base-200 fixed top-0 left-0 z-50 py-2 px-8 md:py-2 lg:px-32 xl:px-72 border-b border-base-300'>
            <div className="navbar-start sm:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost sm:hidden">
                        <BiMenuAltLeft className="text-2xl" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto capitalize">
                        {menuLinks.map((menuItem, index) => {
                            return (
                                <li tabIndex={0} key={index}>
                                    <NavLink to={menuItem.route}  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>{menuItem.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="navbar-start w-auto hidden sm:flex capitalize">
                <ul className="menu menu-horizontal px-1">
                    {menuLinks.map((menuItem, index) => {
                        return (
                            <li tabIndex={0} key={index}>
                                <NavLink to={menuItem.route}  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>{menuItem.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className="navbar-end w-auto">
                <button className="btn btn-square btn-ghost">
                    <label className="swap swap-rotate w-12 h-12">
                        <input
                            type="checkbox"
                            onChange={handleToggle}
                            // show toggle image based on localstorage theme
                            checked={theme === "light" ? false : true}
                        />
                        {/* light theme sun image */}
                        <BsSun className="text-xl swap-on" />                
                        {/* dark theme moon image */}
                        <BsMoonStars className="text-xl swap-off" />
                    </label>
                </button>
            </div>

        </div>
    )
}

export default Navbar