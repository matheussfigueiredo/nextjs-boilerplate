"use client";

import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";

export function NavBar() {
  function removeToken() {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    return redirect("/sign-in");
  }

  return (
    <header className="bg-background border-border sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b px-4 py-3.5">
      <h1 className="text-xl font-semibold lg:text-2xl">Boilerplate</h1>
      <Button variant="ghost" onClick={() => removeToken()}>
        Logout <LogOutIcon size={18} />
      </Button>
    </header>
  );
}
