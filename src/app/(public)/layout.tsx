import React from "react";
import { PublicNavBar } from "./_components/public-nav-bar";

export default function PublicLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col">
      <PublicNavBar />
      {children}
    </main>
  );
}
