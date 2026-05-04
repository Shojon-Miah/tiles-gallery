import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

/**
 * Convenience hook that wraps BetterAuth's useSession.
 * Returns:
 *   - user        : the logged-in user object, or null
 *   - session     : the full session object
 *   - isPending   : true while the session is loading
 *   - isLoggedIn  : boolean
 *   - logout      : async function to sign out and redirect home
 */
export function useAuth() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const user = session?.user ?? null;
  const isLoggedIn = !!user;

  const logout = async () => {
    await signOut();
    toast.success("Logged out successfully");
    router.push("/");
  };

  return { user, session, isPending, isLoggedIn, logout };
}
