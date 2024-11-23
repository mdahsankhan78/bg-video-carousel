import {Link } from "react-router-dom";


import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";
import Sidebarmain from "./Sidebar";
import { useState } from "react";

const links = [
  { location: "/", name: "home" },
  { location: "/aboutus", name: "About us" },
  { location: "/services", name: "Services" },
  { location: "/products", name: "Products" },
  { location: "/blogs", name: "Blogs" },
  { location: "/contactus", name: "Contact Us" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = window.location.pathname;
  const [activeLink, setActiveLink] = useState(links[0]);
  const [hoverLink, setHoverLink] = useState(links[0]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const handleHoverClick = (link) => {
    setHoverLink(link);
  };
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
        <>
        
        <Link
          key={index}
          to={link.location}
          className={`capitalize ${linkStyles} ${path === link.location && ('text-primary')}`}
          onClick={() => handleLinkClick(link)}
          onMouseEnter={() => handleHoverClick(link)}
          onMouseLeave={() => handleHoverClick()}
        >
          {/* Underline animation only for active link */}
          {path === link.location && (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {hoverLink === link && (
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ width: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
         </>
   
        );
      }
      )}
        {/* <Link>
           <SearchIcon strokeWidth={4} className="h-4" />
         </Link>
    */}
         <Link className="lg:block hidden">
         <Sheet>
           <SheetTrigger asChild> 
           <MenuIcon />
           </SheetTrigger>
           <SheetContent className='overflow-y-auto'>
             <Sidebarmain/>
           </SheetContent>
         </Sheet>
         
         </Link>
    </div>
  );
};

export default Nav;
