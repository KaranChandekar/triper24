import Image from "next/image";
import Logo from "../../../public/images/Triperlogo.png";

const Navbar = () => {
  return (
    <header className="max-w-6xl mx-auto text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center justify-between">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <span className="w-20">
            <Image src={Logo} />
          </span>
          <span class="ml-3 text-xl font-bold">Triper24</span>
        </a>

        <button class="inline-flex items-center bg-black text-white font-semibold border-0 py-1 px-3 focus:outline-none rounded text-lg">
          Download App
        </button>
      </div>
    </header>
  );
};
export default Navbar;
