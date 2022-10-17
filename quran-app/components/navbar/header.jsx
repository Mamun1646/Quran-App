import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  return (
    <>
      <div className="bg-teal-900 h-10 flex">
        <span className="text-white text-3xl ml-10 my-2">
          <TiThMenu />
        </span>
        <h1 className="text-white hover:text-pink-900   text-3xl mx-96 px-52">
          The Holly Quran
        </h1>
        <span className="text-white text-3xl ml-20 my-2">
          <CgProfile />
        </span>
        <span className="text-white text-3xl ml-2 my-2">
          <AiOutlineSetting />
        </span>
        <span className="text-white text-3xl mx-2 my-2">
          <FiSearch />
        </span>
      </div>
    </>
  );
};

export default Header;
