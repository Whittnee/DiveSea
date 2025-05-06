'use client'
import { TNavLinkProps } from "@/shared/ui/nav-link/nav-link-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import clsx from "clsx"



export const NavLink: FC<TNavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className={clsx("text-lg uppercase leading-7", isActive ? "text-accent pointer-events-none" : "text-extra")}>{children}</Link>
  )
}