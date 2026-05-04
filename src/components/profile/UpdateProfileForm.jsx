"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function UpdateProfileForm() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [name, setName] = useState(user?.name ?? "");
  const [imageUrl, setImageUrl] = useState(user?.image ?? "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image: imageUrl,
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
    <div className="max-w-xl mx-auto">
      <Toaster position="top-center" />

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
              Update Profile
            </h1>
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
                placeholder="Your full name"
                className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                Photo URL
              </label>
              <input
                type="text"
                placeholder="https://example.com/photo.jpg"
                className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-2">
              <button
                type="button"
                onClick={() => router.push("/my-profile")}
                className="flex-1 border border-stone-300 text-stone-600 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-stone-800 text-white py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-stone-700 transition-colors disabled:opacity-60"
              >
                {loading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

