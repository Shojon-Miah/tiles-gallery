import ProfileInfo from "@/components/profile/ProfileInfo";

export const metadata = {
  title: "My Profile — Tiles Gallery",
  description: "View and manage your Tiles Gallery profile.",
};

export default function MyProfilePage() {
  return (
    <main className="min-h-screen bg-stone-50 py-16 px-4">
      <ProfileInfo />
    </main>
  );
}
