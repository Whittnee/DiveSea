import { NavLink } from "@/shared/ui/nav-link";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const AppHeader: FC = () => {
  return (
    <header className="flex items-center w-full bg-main py-11 px-[90px] gap-16">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={53} height={53} />
      </Link>
      <nav className="flex flex-row gap-[54px]">
        <NavLink href="/discover">Discover</NavLink>
        <NavLink href="/creators">Creators</NavLink>
        <NavLink href="/sell">Sell</NavLink>
        <NavLink href="/stats">Stats</NavLink>
      </nav>
    </header>
  );
};
