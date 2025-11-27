"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const links = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Shop", href: "/shop" },
    { id: 3, title: "About", href: "/about" },
    { id: 4, title: "Contact", href: "/contact" },
  ];
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center gap-5 text text-lg">
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className={`font-semibold hover:text-primary transition-colors duration-300 ${
                pathname === link.href ? "text-primary" : "text-secondary"
              }`}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
