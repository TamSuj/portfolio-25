import "./Navbar.css";
function Navbar() {
  return (
      <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="block lg:hidden">
              <button
                  className="flex items-center px-3 py-2 border rounded hover:text-gray-700 hover:border-white">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
              </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                  <a href="#responsive-header"
                     className="block mt-6 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4">
                      About
                  </a>
                  <a href="#responsive-header"
                     className="block mt-6 lg:inline-block lg:mt-0 hover:text-gray-700 mr-4">
                      Work
                  </a>
                  <a href="#responsive-header"
                     className="block mt-6 lg:inline-block lg:mt-0 hover:text-gray-700">
                      Contact
                  </a>
              </div>
              <div>
                  <a href="#"
                     className="inline-block text-sm px-4 py-2 leading-none border rounded border-black hover:border-transparent hover:bg-gray-600 hover:text-white hover:bg-white mt-4 lg:mt-0">Resume</a>
              </div>
          </div>
      </nav>
  );
}

export default Navbar;