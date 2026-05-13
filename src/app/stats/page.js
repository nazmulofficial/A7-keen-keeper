"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useFriends } from "@/app/FriendContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function StatsPage() {
  const { interactions } = useFriends();
  const textCount = interactions.filter(
    (item) => item.type === "Text"
  ).length;
  const callCount = interactions.filter(
    (item) => item.type === "Call"
  ).length;
  const videoCount = interactions.filter(
    (item) => item.type === "Video"
  ).length;
  const data = [
    {
      name: "Text",
      value: textCount,
    },
    {
      name: "Call",
      value: callCount,
    },
    {
      name: "Video",
      value: videoCount,
    },
  ];

  const COLORS = [
    "#7C3AED",
    "#1D5A46",
    "#36B37E",
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#f5f7f6] min-h-screen">

        <div className="max-w-6xl mx-auto justify-center px-6 pt-14 pb-20 ">

    
          <h1 className="text-[52px]  font-bold text-[#1f2b3d] leading-tight mb-10">
            Friendship Analytics
          </h1>

          <div className="bg-white rounded-xl border border-gray-100 p-8">

            <h2 className="text-[18px] font-semibold text-[#244D3F] mb-8">
              By Interaction Type
            </h2>

            <div className="w-full h-[420px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="45%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={6}
                  >

                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index]}
                      />
                    ))}

                  </Pie>

                  <Tooltip />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}