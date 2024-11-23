import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
//   import Socials from "../Socials";

const Sidebarmain = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-y-10 h-full">
        <Link to={'/'}>
          <img src="http://innovador.solutions/wp-content/uploads/2024/06/logo.svg" alt="" className="w-40" />
        </Link>
        <p className="text-gray-500 text-lg">Launched in 2022, we are a mission-driven software company dedicated to building the future of business. We combine cutting-edge technologies with user-friendly interfaces to make everyday tasks effortless. Our passion for innovation inspires us to create transformative technology designed to empower businesses and improve lives. lives.</p>

        <div>
          <h1 className="text-3xl text-primary font-bold">Products</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6">
            <div className="col-span-1">
              <img src="/images/sidebar1.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar2.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar3.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar4.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar5.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar6.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar7.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar8.png" alt="" />
            </div>
            <div className="col-span-1">
              <img src="/images/sidebar9.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-primary font-bold">Contacts</h1>
          <ul className="text-primary-foreground text-lg my-6 space-y-6">
            <li className="flex  items-center space-x-4"><FontAwesomeIcon icon={faEnvelope} className="h-8 text-primary" />
              <p>info@innovadorsolutions.com</p></li>
            <li className="flex  items-center space-x-4"><FontAwesomeIcon icon={faMapLocation} className="h-8 text-primary" />
              <p>Block 2 Block 6 PECHS, Karachi, Karachi City, Sindh 75400</p></li>
            <li className="flex  items-center space-x-4"><FontAwesomeIcon icon={faPhone} className="h-8 text-primary" />
              <p>+92 332 466 6823</p></li>
          </ul>
          <div className="col-span-1 flex space-x-4">
            <a href="https://www.facebook.com/innovadors/" target="_blank">
              <FontAwesomeIcon className='h-8 text-[#1877F2]' icon={faFacebook} />
            </a>
            <a href="https://pk.linkedin.com/company/innovadorsolutions" target="_blank">
              <FontAwesomeIcon className='h-8 text-[#0077B5]' icon={faLinkedin} />
            </a  >
          </div>
        </div>





      </div>
      <style jsx>
        {`
          .custom-line {
            width: 40px;             /* Adjust width as needed */
            height: 5px;             /* Adjust height as needed */
            background-color: #FFC107; /* Yellow color */
            margin: 20px 0;          /* Vertical margin (top and bottom) */
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow */
            border-radius: 5px;      /* Rounded edges */
          }
        `}
      </style>
    </div>
  );
};

export default Sidebarmain;
