"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaClock,
  FaChartLine,
} from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome size={16} className="text-inherit"/>,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: <FaClock size={16} className="text-inherit"/>,
    },
    {
      name: "Stats",
      path: "/stats",
      icon: <FaChartLine size={16} className="text-inherit" />,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-10 py-2">
      <div className="max-w-8xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-[34px] font-bold text-[#1f2b3d] tracking-tight">
          Keens<span className="text-[#244D3F]">Keeper</span>
        </h1>

        {/* Nav Links */}
        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-1xl font-medium transition ${
                pathname === link.path
                  ? "bg-[#d6f840] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}