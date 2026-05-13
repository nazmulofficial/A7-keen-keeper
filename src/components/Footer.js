import {
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#1d5a46] text-white mt-20">
    
      <div className="max-w-8xl mx-auto px-90 py-16 text-center">
        
        {/* Logo */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mt-5 max-w-6xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections.
          Browse, tend, and nurture the relationships
          that matter most.
        </p>

        {/* Social */}
        <div className="mt-8">
          <h3 className="font-semibold mb-5 text-lg">
            Social Links
          </h3>

          <div className="flex justify-center gap-4">
            
            <button className="w-11 h-11 rounded-full bg-white text-[#1d5a46] flex items-center justify-center hover:scale-110 transition">
              <FaGithub />
            </button>

            <button className="w-11 h-11 rounded-full bg-white text-[#1d5a46] flex items-center justify-center hover:scale-110 transition">
              <FaFacebookF />
            </button>

            <button className="w-11 h-11 rounded-full bg-white text-[#1d5a46] flex items-center justify-center hover:scale-110 transition">
              <FaXTwitter />
            </button>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[18px] text-gray-300">
          
          <p>
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-8">
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