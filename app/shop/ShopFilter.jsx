"use client";

import React, { useEffect, useMemo, useState } from "react";
import ShopFilterContent from "./ShopFilterContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/rtk/slices/productSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

const filterStyle = "text-secondary text-2xl capitalize border-b-3 pb-5";

export default function ShopFilter() {
  const [openMenus, setOpenMenus] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Number of Products  for each Filter
  const filters = useMemo(() => {
    const inStockCount =
      allProducts?.filter((p) => p.quantity >= 1).length || 0;
    const outOfStock = allProducts?.filter((p) => p.quantity < 1).length || 0;

    const creamProductsCount =
      allProducts?.filter((p) => p.productType === "cream").length || 0;
    const lotionProductsCount =
      allProducts?.filter((p) => p.productType === "lotion").length || 0;

    const brandCount = (brand) => {
      return allProducts?.filter((p) => p.brand === brand).length || 0;
    };
    return [
      {
        id: 1,
        title: "Availability",
        type: "checkbox",
        category: "availability",
        content: [
          {
            id: 1,
            title: `In stock (${inStockCount})`,
            value: "in-stock",
          },
          {
            id: 2,
            title: `Out of Stock (${outOfStock})`,
            value: "out-of-stock",
          },
        ],
      },
      // {
      //   id: 2,
      //   title: "Price",
      //   type: "range",
      //   category: "price",
      //   content: { from: 0, to: 25 },
      // },
      {
        id: 3,
        title: "Product type",
        category: "productType",
        type: "checkbox",
        content: [
          { id: 1, title: `Cream (${creamProductsCount})`, value: "cream" },
          { id: 2, title: `Lotion (${lotionProductsCount})`, value: "lotion" },
        ],
      },
      {
        id: 4,
        title: "Brand",
        category: "brand",
        type: "checkbox",
        content: [
          { id: 1, title: `Carla (${brandCount("carla")})`, value: "carla" },
          {
            id: 2,
            title: `Cindrella (${brandCount("cindrella")})`,
            value: "cindrella",
          },
          {
            id: 3,
            title: `Ellen's (${brandCount("ellen's")})`,
            value: "ellen's",
          },
          { id: 4, title: `Fabell (${brandCount("fabell")})`, value: "fabell" },
          { id: 5, title: `Laura (${brandCount("laura")})`, value: "laura" },
          { id: 6, title: `Liva (${brandCount("liva")})`, value: "liva" },
          { id: 7, title: `Nyka (${brandCount("nyka")})`, value: "nyka" },
          {
            id: 8,
            title: `Verisel (${brandCount("verisel")})`,
            value: "verisel",
          },
          {
            id: 9,
            title: `Wisteria (${brandCount("wisteria")})`,
            value: "Wisteria",
          },
        ],
      },
    ];
  }, [allProducts]);

  // Show Menu For Each Filter
  const toggleMenu = (id) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  //  Filter Depend on Category
  const handelFilterChange = (category, value) => {
    const params = new URLSearchParams(window.location.search);

    if (params.get(category) === value) {
      params.delete(category);
    } else {
      params.set(category, value);
    }
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // hide filter in mobile
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  return (
    <div className="pt-2.5 px-2.5 w-full md:w-1/4">
      <div className={`flex items-center justify-between ${filterStyle}`}>
        <h2>filters: </h2>
        <span>
          {isFilterOpen ? (
            <CaretUpIcon
              size={20}
              className="cursor-pointer"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            />
          ) : (
            <CaretDownIcon
              size={20}
              className="cursor-pointer"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            />
          )}
        </span>
      </div>
      <ShopFilterContent
        filters={filters}
        openMenus={openMenus}
        toggleMenu={toggleMenu}
        handelFilterChange={handelFilterChange}
        searchParams={searchParams}
        isfilterOpen={isFilterOpen}
      />
    </div>
  );
}
