import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../ui/sheet";
  
  import { AlignJustify } from "lucide-react";
  // import Logo from "../Logo";
  import Nav from "./Nav";
import { Link, BrowserRouter as Router } from "react-router-dom";
//   import Socials from "../Socials";
  
  const MobileNav = () => {
    return (
      <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer text-black" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            {/* <Logo /> */}
            <Link to={'/'}>
            <img src="http://innovador.solutions/wp-content/uploads/2024/06/logo.svg" alt="" />
            </Link>
            <Nav
              containerStyles={"flex flex-col items-center gap-y-6"}
              linkStyles={"text-2xl"}
            />

          </div>
        </div>
      </SheetContent>
    </Sheet>
    );
  };
  
  export default MobileNav;
  
