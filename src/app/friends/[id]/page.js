"use client";

import { use } from "react";

import { useFriends } from "@/app/FriendContext";

import friends from "@/data/friends.json";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  FaPhoneAlt,
  FaVideo,
  FaTrash,
  FaArchive,
} from "react-icons/fa";

import { BsChatDotsFill } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";

export default function FriendDetails({ params }) {

  const { id } = use(params);

  const { addInteraction } = useFriends();

  const friend = friends.find(
    (f) => f.id === parseInt(id)
  );

  if (!friend) {
    return (
      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Friend Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#f5f7f6] min-h-screen py-16 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">

              <img
                src={friend.picture}
                alt={friend.name}
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />

              <h1 className="text-3xl font-bold mt-5">
                {friend.name}
              </h1>

              <div className="mt-4">
                <span
                  className={`px-4 py-1 rounded-full text-sm text-white ${
                    friend.status === "overdue"
                      ? "bg-red-500"
                      : friend.status === "almost due"
                      ? "bg-yellow-500"
                      : "bg-green-700"
                  }`}
                >
                  {friend.status}
                </span>
              </div>

              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {friend.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 italic mt-5">
                "{friend.bio}"
              </p>

              <p className="text-gray-400 mt-3 text-sm">
                Preferred: email
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-4">

              <button className="w-full bg-white rounded-xl py-4 flex items-center justify-center gap-3 shadow-sm hover:bg-gray-50 transition">
                <LuAlarmClock />
                Snooze 2 Weeks
              </button>

              <button className="w-full bg-white rounded-xl py-4 flex items-center justify-center gap-3 shadow-sm hover:bg-gray-50 transition">
                <FaArchive />
                Archive
              </button>

              <button className="w-full bg-white rounded-xl py-4 flex items-center justify-center gap-3 shadow-sm text-red-500 hover:bg-red-50 transition">
                <FaTrash />
                Delete
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <h2 className="text-5xl font-bold text-[#1d5a46]">
                  {friend.days_since_contact}
                </h2>

                <p className="text-gray-500 mt-3">
                  Days Since Contact
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <h2 className="text-5xl font-bold text-[#1d5a46]">
                  {friend.goal}
                </h2>

                <p className="text-gray-500 mt-3">
                  Goal (Days)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <h2 className="text-3xl font-bold text-[#1d5a46]">
                  {friend.next_due_date}
                </h2>

                <p className="text-gray-500 mt-3">
                  Next Due
                </p>
              </div>

            </div>

            {/* Relationship Goal */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex justify-between items-start">

              <div>
                <h2 className="text-2xl font-semibold">
                  Relationship Goal
                </h2>

                <p className="text-gray-500 mt-4">
                  Connect every{" "}
                  <span className="font-bold text-black">
                    {friend.goal} days
                  </span>
                </p>
              </div>

              <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
                Edit
              </button>

            </div>

            {/* Quick Check-In */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <h2 className="text-2xl font-semibold mb-6">
                Quick Check-In
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* CALL */}
                <button
                  onClick={() =>
                    addInteraction(friend.name, "Call")
                  }
                  className="border rounded-2xl p-8 hover:bg-gray-50 transition flex flex-col items-center gap-4"
                >
                  <FaPhoneAlt size={28} />

                  <span className="text-lg">
                    Call
                  </span>
                </button>

                {/* TEXT */}
                <button
                  onClick={() =>
                    addInteraction(friend.name, "Text")
                  }
                  className="border rounded-2xl p-8 hover:bg-gray-50 transition flex flex-col items-center gap-4"
                >
                  <BsChatDotsFill size={28} />

                  <span className="text-lg">
                    Text
                  </span>
                </button>

                {/* VIDEO */}
                <button
                  onClick={() =>
                    addInteraction(friend.name, "Video")
                  }
                  className="border rounded-2xl p-8 hover:bg-gray-50 transition flex flex-col items-center gap-4"
                >
                  <FaVideo size={28} />

                  <span className="text-lg">
                    Video
                  </span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}