"use client";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import Loader from "@/components/shared/Loader";

export default function ProfileInfo() {
  const { user, isPending, logout } = useAuth();

  if (isPending) return <Loader />;

  if (!user) return null;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-stone-800" />

      <div className="p-8 flex flex-col items-center gap-6">
        {/* Avatar */}
        <img
          src={user.image ?? "/default-avatar.png"}
          alt={user.name ?? "User"}
          className="w-24 h-24 rounded-full object-cover border-4 border-stone-200 shadow"
        />

        {/* User Info */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-800 tracking-tight">
            {user.name}
          </h2>
          <p className="text-sm text-stone-500 mt-1">{user.email}</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-100" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/my-profile/update"
            className="flex-1 text-center bg-stone-800 text-white py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-stone-700 transition-colors"
          >
            Update Profile
          </Link>
          <button
            onClick={logout}
            className="flex-1 border border-stone-300 text-stone-700 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-stone-50 hover:border-stone-400 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
