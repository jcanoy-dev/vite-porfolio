
import { Link } from "react-router";

const AppHeader = () => {

  return (
    <header className=" top-0 z-10 w-full border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-center h-20 gap-8 sm:gap-12 px-4 py-4 text-sm sm:text-lg font-medium">
        <Link to="/" className="hover:text-gray-600">Portfolio</Link>
        <Link to="/about" className="hover:text-gray-600">About</Link>
        <Link to="/contact" className="hover:text-gray-600">Contact</Link>
      </div>
    </header>
  );
};
  
export default AppHeader;
