"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  exact?: boolean; 
}

export function ActiveLink({ href, children, exact = false }: ActiveLinkProps) {
  const pathname = usePathname();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? "text-primary font-bold" : "hover:text-primary"}
    >
      {children}
    </Link>
  );
}
