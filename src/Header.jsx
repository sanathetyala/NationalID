
import { SlEnvolope } from "react-icons/sl";
import { IoNotifications } from "react-icons/io5";
import logo from "../src/assets/rfchh logo.png";
import { FaRegIdCard} from "react-icons/fa";

const Header = () => {
  return (
    <nav className="flex items-center justify-between bg-orange-500 px-4 h-16 border-b border-gray-300">
      
      <div >
        <img
          src={logo}
          alt="rfchh Logo" 
          className="h-12 w-12 object-cover rounded-xl"
        />
      </div>

      <div className="flex items-center ml-44 text-black">
        <FaRegIdCard className="text-2xl mr-2" />
        <h1 className="text-xl font-semibold">NationalID Details</h1>
      </div>

      <div className="flex items-center space-x-4">
        <SlEnvolope className="text-black text-xl" />
        <IoNotifications className="text-black text-xl" />

        <div className="flex items-center space-x-2 p-2 rounded">
          <div className="h-8 w-8 bg-gray-300 rounded-full" />

          <div className="flex flex-col">
            <span className="text-black font-semibold">Chandra Kiran</span>
            <span className="text-sm text-gray-600">Front-end Developer</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
