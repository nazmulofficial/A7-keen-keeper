import {
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1d5a46] text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 text-center">
        
        {/* Logo */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mt-5 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Your personal shelf of meaningful connections.
          Browse, tend, and nurture the relationships
          that matter most.
        </p>

        {/* Social */}
        <div className="mt-10">
          
          <h3 className="font-semibold mb-5 text-xl md:text-2xl">
            Social Links
          </h3>

          <div className="flex justify-center gap-4 flex-wrap">
            
            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-[#1d5a46] flex items-center justify-center hover:scale-110 transition">
              <FaGithub size={22} />
            </button>

            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-[#1d5a46] flex items-center justify-center hover:scale-110 transition">
              <FaFacebookF size={22} />
            </button>

            <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-[#1d5a46] flex items-center justify-center hover:scale-110 transition">
              <FaXTwitter size={22} />
            </button>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-5 text-sm md:text-[18px] text-gray-300">
          
          <p className="text-center md:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-8">
            
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms of Service
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Cookies
            </span>

          </div>

        </div>
      </div>
    </footer>
  );
}