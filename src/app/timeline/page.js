"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useFriends } from "@/app/FriendContext";

import {
  FaPhoneAlt,
  FaVideo,
} from "react-icons/fa";

import { BsChatDotsFill } from "react-icons/bs";

export default function TimelinePage() {

  const { interactions } = useFriends();

  const [filter, setFilter] = useState("All");

  // FILTERED DATA
  const filteredInteractions =
    filter === "All"
      ? interactions
      : interactions.filter(
          (item) => item.type === filter
        );

  // ICON FUNCTION
  const getIcon = (type) => {

    switch (type) {

      case "Call":
        return <FaPhoneAlt size={22} />;

      case "Text":
        return <BsChatDotsFill size={22} />;

      case "Video":
        return <FaVideo size={22} />;

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#f5f7f6] min-h-screen py-16 px-6">

        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <h1 className="text-5xl font-bold mb-8">
            Timeline
          </h1>

          {/* FILTER */}
          <div className="mb-10">

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
              className="bg-white border border-gray-200 rounded-xl px-5 py-3 outline-none shadow-sm"
            >
              <option value="All">
                All Interactions
              </option>

              <option value="Call">
                Calls
              </option>

              <option value="Text">
                Texts
              </option>

              <option value="Video">
                Videos
              </option>

            </select>
          </div>

          {/* TIMELINE ITEMS */}
          <div className="space-y-6">

            {filteredInteractions.length === 0 ? (

              <div className="bg-white rounded-2xl p-10 text-center text-gray-500 shadow-sm">
                No Interactions Found
              </div>

            ) : (

              filteredInteractions.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition"
                >

                  {/* ICON */}
                  <div className="text-[#1d5a46]">
                    {getIcon(item.type)}
                  </div>

                  {/* CONTENT */}
                  <div>

                    <h2 className="text-xl font-semibold text-[#1f2b3d]">
                      {item.type} with{" "}
                      {item.friendName}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {item.date}
                    </p>

                  </div>

                </div>
              ))
            )}

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}