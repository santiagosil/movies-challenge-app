import { CircleUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProfileButton } from "../ui/ProfileButton";

export const Header = () => {
  return (
    <header className="bg-black w-full text-white flex justify-between items-center py-4 px-12">
      <nav className="space-x-16 flex items-center w-min">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="w-[200px] h-auto"
          width={180}
          height={50}
        />
        <Link href={"/"}>Popular</Link>
        <Link href={"/"}>Favorites</Link>
      </nav>
      <ProfileButton />
    </header>
  );
};
