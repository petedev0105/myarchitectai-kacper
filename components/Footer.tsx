import Link from "next/link";
import { useState, useEffect } from "react";
import { useSupabase } from "./supabaseProvider";

export default function Footer() {
  const { user, supabase } = useSupabase();

  async function handleSignOut() {
    try {
      const { error } = await supabase.auth.signOut();

      if (!error) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-left">
        <span className="font-bold text-stone-500">MyArchitectAI</span>
        <div>
          <span>Empowering architects in the digital age.</span>
        </div>
      </div>
      {user ? (
        <div>
          <button className="text-red-500" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      ) : null}

      <div>
        <Link
          className="underline"
          target="_blank"
          href={"https://twitter.com/petr0105"}
        >
          Contact us on Twitter
        </Link>
      </div>
    </footer>
  );
}
