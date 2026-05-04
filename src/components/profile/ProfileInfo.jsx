import Link from "next/link";

export default function ProfileInfo({ user }) {
  return (
    <div className="max-w-xl mx-auto">

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-stone-800" />

        <div className="p-8">

          {/* Title */}
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-400 mb-2">
              Account
            </p>
            <h1 className="text-2xl font-bold text-stone-800">
              My Profile
            </h1>
          </div>

          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <img
              src={user.image ?? "/default-avatar.png"}
              alt={user.name ?? "User"}
              className="w-24 h-24 rounded-full object-cover border-4 border-stone-100 shadow-md"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="bg-stone-50 px-4 py-3 rounded-lg">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                Full Name
              </p>
              <p className="text-sm font-medium text-stone-800">
                {user.name}
              </p>
            </div>
            <div className="bg-stone-50 px-4 py-3 rounded-lg">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">
                Email
              </p>
              <p className="text-sm font-medium text-stone-800">
                {user.email}
              </p>
            </div>
          </div>

          {/* Update Button */}
          <Link
            href="/my-profile/update"
            className="block text-center w-full bg-stone-800 text-white py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-stone-700 transition-colors"
          >
            Update Profile
          </Link>

        </div>
      </div>
    </div>
  );
}

