import { buttonVariants } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function PublicNavBar() {
  return (
    <header className="bg-background border-border sticky top-0 flex w-full items-center justify-between gap-4 border-b px-4 py-3.5">
      <h1 className="text-xl font-semibold lg:text-2xl">Boilerplate</h1>
      <Link
        href="/sign-in"
        className={buttonVariants({ variant: "ghost", size: "default" })}
      >
        Sign In <ChevronRightIcon size={20} />
      </Link>
    </header>
  );
}
