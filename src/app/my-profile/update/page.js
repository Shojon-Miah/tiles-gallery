import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

export const metadata = {
  title: "Update Profile — Tiles Gallery",
  description: "Update your name and profile photo.",
};

export default function UpdateProfilePage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 px-4">
      <UpdateProfileForm />
    </main>
  );
}
