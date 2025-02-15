import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-200 flex-col justify-center px-4">
      <div className="max-w-full lg:max-w-xl">
        <h1 className="text-center lg:text-left">
          Welcome to Nextjs Boilerplate
        </h1>
        <p className="text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos
          suscipit accusantium dolorem in earum id nam consequuntur eligendi
          dolore!
        </p>
        <div className="mt-4 flex w-full items-start justify-center lg:justify-start">
          <Link
            className="bg-primary text-background hover:bg-primary/90 mt-6 w-auto rounded-md px-6 py-3 text-center transition-all"
            href="/sign-in"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
