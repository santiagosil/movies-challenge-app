import Image from "next/image";
import Link from "next/link";

import {ProfileButton} from "../ui/ProfileButton";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-black px-12 py-4 text-white">
      <nav className="flex w-min items-center space-x-16">
        <Image alt="Logo" className="h-auto w-[200px]" height={50} src="/logo.svg" width={180} />
        <Link href="/">Popular</Link>
        <Link prefetch href="/favorites">
          Favorites
        </Link>
      </nav>
      <ProfileButton />
    </header>
  );
}
