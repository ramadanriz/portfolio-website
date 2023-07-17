import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import menuLinks from '../constant'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import Container from './Container'

const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const handleToggle = (e) => {
        if (e.target.checked) {
          setTheme("dark")
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
        <Container className='navbar bg-base-100'>

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

            <div className="navbar-start hidden sm:flex capitalize">
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
            
            <div className="navbar-end">
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

        </Container>
    )
}

export default Navbar