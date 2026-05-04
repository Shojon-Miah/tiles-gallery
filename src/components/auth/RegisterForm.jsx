"use client";
import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    const { error } = await signUp.email({
      name,
      email,
      password,
      image: photoUrl || undefined,
    });

    if (error) {
      toast.error(error.message || "Registration failed. Please try again.");
    } else {
      toast.success("Registration successful! Please login.");
      router.push("/login");
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    try {
      await signIn.social({ provider: "google", callbackURL: "/" });
    } catch {
      toast.error("Google sign-up failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <Toaster position="top-center" />

      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-stone-800" />

        <div className="p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-stone-800 tracking-tight">
              Create Account
            </h1>
            <p className="text-sm text-stone-400 mt-1">
              Join Tiles Gallery today
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="flex flex-col gap-4">

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Photo URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                Photo URL
              </label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full border border-stone-300 px-4 py-2.5 rounded-lg text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-stone-600 transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-stone-800 text-white py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-stone-700 transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-xs text-stone-400 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          {/* Google Sign-up Button */}
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 border border-stone-300 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 hover:border-stone-400 transition-all"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-stone-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-stone-800 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
