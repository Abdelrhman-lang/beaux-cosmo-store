"use client";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { totalPages } = useSelector((state) => state.products);

  // 1. نعرف إحنا في صفحة كام حالياً
  const currentPage = Number(searchParams.get("page")) || 1;

  // 2. فانكشن تغيير الصفحة
  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);
    router.push(`?${params.toString()}`);
  };

  // لو مفيش غير صفحة واحدة، مش هنعرض الـ Pagination
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      {/* سهم الرجوع */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-all"
      >
        <CaretLeftIcon size={24} weight="bold" />
      </button>

      {/* عرض الصفحة الحالية من الإجمالي */}
      <div className="text-lg font-medium">
        Page <span className="text-primary">{currentPage}</span> of {totalPages}
      </div>

      {/* سهم التالي */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-all"
      >
        <CaretRightIcon size={24} weight="bold" />
      </button>
    </div>
  );
}
