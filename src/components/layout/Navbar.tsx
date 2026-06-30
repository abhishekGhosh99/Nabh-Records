"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";
import Logo from "../shared/Logo";
import { navigationLinks } from "../../constants/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${
                pathname === item.href
                  ? "text-amber-400"
                  : "text-zinc-300 hover:text-amber-500"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            variant="outline"
            className="border-zinc-400 bg-transparent text-zinc-300 hover:bg:amber-500 hover:text-black"
          >
            Login / Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
