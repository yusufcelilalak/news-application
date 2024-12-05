"use client";

import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        active={href !== "/" && path.startsWith(href)}
        className={className}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  );
};

export default NavLink;
