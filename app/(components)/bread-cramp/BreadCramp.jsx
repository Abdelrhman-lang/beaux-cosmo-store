"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCramp({ product }) {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[#F2F3F5] py-2 px-5 lg:px-0 flex items-center justify-center h-[150px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-3xl text-secondary uppercase text-center">
          {pathname.includes("/cart")
            ? "your shopping cart"
            : pathname.includes("product-details")
            ? "product"
            : pathname.includes("about")
            ? "about"
            : ""}
        </h3>
        <ol className="flex items-center justify-center md:justify-start gap-1 text-sm md:text-lg  text-gray-700">
          <li>
            <Link href="/" className="block text-primary font-medium ">
              {" "}
              Home{" "}
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <span className="block transition-colors hover:text-gray-900">
              {" "}
              {pathname.includes("/cart") ? (
                "Your Shopping Cart"
              ) : pathname.includes("user-account") ? (
                "User Account"
              ) : pathname.includes("shop") ? (
                "Products"
              ) : pathname.includes("about") ? (
                "About"
              ) : pathname.includes("privacy-policy") ? (
                "Privacy Policy"
              ) : pathname.includes("product-details") ? (
                <span>{product?.title}</span>
              ) : null}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
