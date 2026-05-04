import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import ProfileInfo from "@/components/profile/ProfileInfo";

export const metadata = {
  title: "My Profile — Tiles Gallery",
  description: "View your Tiles Gallery profile",
};

export default async function MyProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-stone-50 py-16 px-4">
      <ProfileInfo user={session.user} />
    </main>
  );
}
