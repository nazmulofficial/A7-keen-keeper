import friends from "@/data/friends.json";
import Navbar from "@/components/Navbar";
// import FriendCard from "@/components/FriendCard";
// import Footer from "@/components/Footer";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f7f6] min-h-screen w-full">
        {/* HERO */}
        <section className="max-w-8xl mx-auto px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
            Friends to keep close in your life
          </h1>

          <p className="text-gray-500 mt-6 text-lg max-w-3xl mx-auto">
            Your personal shelf of meaningful connections.
            Browse, tend, and nurture the relationships
            that matter most.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-green-900 text-white px-6 py-3 rounded-xl hover:bg-green-800 transition">
            <FaPlus />
            Add a Friend
          </button>
        </section>

        <section className="max-w-8xl mx-auto px-90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-5xl font-bold text-green-900">
              10
            </h2>
            <p className="text-gray-500 mt-3">
              Total Friends
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-5xl font-bold text-green-900">
              3
            </h2>
            <p className="text-gray-500 mt-3">
              On Track
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-5xl font-bold text-green-900">
              6
            </h2>
            <p className="text-gray-500 mt-3">
              Need Attention
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-5xl font-bold text-green-900">
              12
            </h2>
            <p className="text-gray-500 mt-3">
              Interactions This Month
            </p>
          </div>
        </section>

        {/* <section className="max-w-8xl mx-auto px-90 py-20">
          
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Your Friends
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {friends.map((friend) => (
              <FriendCard
                key={friend.id}
                friend={friend}
              />
            ))}
          </div>
        </section> */}
      </main>

      {/* <Footer/> */}
    </>
  );
}