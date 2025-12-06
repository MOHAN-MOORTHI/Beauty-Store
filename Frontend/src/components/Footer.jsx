const Footer = () => {
  return (
    <div className="bg-gray-100 px-[200px] h-[60vh] mt-10 ">
      {/* Upper Part */}
      <div className=" flex justify-between py-[5%] ">
        <div>
          <img src="/blisslogo1.png" alt="" height={200} width={200} />
          <p className="mt-2">
            LET'S MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS{" "}
          </p>
        </div>
        <div>
          <h3 className="text-xl  font-semibold">Quick Links </h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-2">123 BeautyBliss Ave, City, Country</p>
          <p className="mt-2">Phone: (123) 456-8868</p>
          <p className="mt-2">Email: infotechabcd@gmail.com</p>
        </div>
      </div>
      {/* Lower Part */}
      <div className=" mt-8 border-t border-[#e9acd9] pt-4 text-center ">
        <p>&copy; 2024 BeautyBliss. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor " viewBox="0 0 24 24">
              <path d=""></path>  
                {/* Add icon social media */}
            </svg>
          </a>
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor " viewBox="0 0 24 24">
              <path d=""></path>
            </svg>
          </a>
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor " viewBox="0 0 24 24">
              <path d=""></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
