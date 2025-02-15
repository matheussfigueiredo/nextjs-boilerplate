import React from "react";
import { NavBar } from "./_components/private-nav-bar";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col">
      <NavBar />
      {children}
    </main>
  );
}
