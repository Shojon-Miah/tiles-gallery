"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useAuth } from "@/hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/components/shared/Loader";

export default function UpdateProfileForm() {
  const router = useRouter();
  const { user, isPending } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [image, setImage] = useState(user?.image ?? "");
  const [loading, setLoading] = useState(false);

  if (isPending) return <Loader />;
  if (!user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    // BetterAuth updateUser — see:
    // https://better-auth.com/docs/concepts/users-accounts#update-user
    const { error } = await authClient.updateUser({
      name: name.trim() || undefined,
      image: image.trim() || undefined,
    });

    if (error) {
      toast.error(error.message || "Update failed. Please try again.");
    } else {
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <Toaster position="top-center" />

      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-stone-800" />

      <div className="p-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
            Update Profile
          </h1>
          <p className="text-sm text-stone-400 mt-1">
            Change your name or profile photo
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 border border-stone-300 text-stone-700 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-stone-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-stone-800 text-white py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-stone-700 transition-colors disabled:opacity-60"
            >
              {loading ? "Saving..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
