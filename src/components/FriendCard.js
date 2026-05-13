import Link from "next/link";

export default function FriendCard({friend}) {
  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 text-center cursor-pointer">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full object-cover mx-auto"
        />

        <h2 className="text-3xl font-bold mt-5">
          {friend.name}
        </h2>

        <p className="text-gray-500 mt-2 text-[16px]">
          {friend.days_since_contact}d ago
        </p>

        <div className="flex justify-center gap-2 mt-4 flex-wrap ">
          {friend.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[16px] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 text-[16px] capitalize">
          <span
            className={` px-4 py-1 rounded-full  text-white ${
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
      </div>
    </Link>
  );
}