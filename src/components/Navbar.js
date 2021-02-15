import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

class Navbar extends Component {
    render () {
        return (
            <header className="bg-pink-500">
                <div className="container mx-auto flex justify-between">
                    <nav className="flex">
                        <NavLink 
                            activeClassName="text-white"
                            className="
                                inline-flex 
                                items-center
                                py-6
                                px-3
                                mr-4
                                text-red-100
                                hover:text-secondaryGreen
                                text-4xl
                                font-bold
                                cursive
                                tracking-widest"
                            exact to="/" >
                            Brack & Bougie
                        </NavLink>
                        <NavLink 
                            className="
                                inline-flex 
                                items-center
                                py-3
                                px-3
                                rounded
                                text-2xl
                                text-red-200
                                hover:text-secondaryGreen"
                            activeClassName="text-red-100 bg-pink-600"
                            to="/post">
                            Blog Posts
                        </NavLink>
                        <NavLink 
                            className="
                                inline-flex 
                                items-center
                                py-3
                                px-3
                                rounded
                                text-2xl
                                text-red-200
                                hover:text-secondaryGreen"
                            activeClassName="text-red-100 bg-pink-600"
                            to="/project">
                            Content
                        </NavLink>
                        <NavLink 
                            className="
                                inline-flex 
                                items-center
                                py-3
                                px-3
                                rounded
                                text-2xl
                                text-red-200
                                hover:text-secondaryGreen"
                            activeClassName="text-red-100 bg-pink-600"
                            to="/about">
                            About Us
                        </NavLink>
                    </nav>
                    <div className="inline-flex py-3 px-3 my-6">
                        <SocialIcon url="https://www.linkedin.com/in/conor-forrester-235677b2/"
                         className="mr-6"
                         target="_blank"
                         fgColor="#fff"
                         bgColor="rgba(34, 143, 83, 0.7)"
                         style={{ height: 50, width: 50 }} 
                         />
                        <SocialIcon url="https://github.com/conorforrester"
                         className="mr-6"
                         target="_blank"
                         fgColor="#fff"
                         bgColor="rgba(34, 143, 83, 0.7)"
                         style={{ height: 50, width: 50 }} 
                         />
                        <SocialIcon url="https://github.com/conorforrester"
                         className="mr-6"
                         target="_blank"
                         fgColor="#fff"
                         bgColor="rgba(34, 143, 83, 0.7)"
                         style={{ height: 50, width: 50 }} 
                         />
                    </div>
                </div>
            </header>
        )
    }
}

export default Navbar;