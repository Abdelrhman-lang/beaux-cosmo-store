"use client";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

export default function ShopFilterContent({
  filters,
  openMenus,
  toggleMenu,
  handelFilterChange,
  searchParams,
  isfilterOpen,
}) {
  return (
    <div>
      {isfilterOpen ? (
        <ul className="flex flex-col px-4 md:px-0">
          {filters.map((filter) => {
            const isOpen = openMenus.includes(filter.id);

            return (
              <li key={filter.id} className="border-b-3 border-secondary/20">
                <div
                  className="pt-5 pb-5 flex items-center justify-between cursor-pointer group"
                  onClick={() => toggleMenu(filter.id)}
                >
                  <span className="text-secondary text-2xl capitalize group-hover:text-primary transition-colors">
                    {filter.title}
                  </span>
                  <span>
                    {isOpen ? (
                      <CaretUpIcon size={20} weight="bold" />
                    ) : (
                      <CaretDownIcon size={20} weight="bold" />
                    )}
                  </span>
                </div>

                {/* مكان محتوى الفلتر (Checkboxes / Price Slider) */}
                {isOpen && (
                  <div className="pt-2 pb-4 flex flex-col gap-3">
                    {filter.type === "checkbox"
                      ? filter.content?.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="flex items-center gap-5 text-xl pl-4"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4"
                                value={item.value}
                                onChange={() =>
                                  handelFilterChange(
                                    filter.category,
                                    item.value
                                  )
                                }
                                checked={
                                  searchParams.get(filter.category) ===
                                  item.value
                                }
                              />
                              <span>{item.title}</span>
                            </div>
                          );
                        })
                      : filter.type === "range" && (
                          <div className="flex flex-col gap-4">
                            <p className="text-xl">
                              The highest price is ${filter.content?.to}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <input
                                type="number"
                                placeholder="From"
                                className="border border-secondary  px-4 py-2"
                              />
                              <input
                                type="number"
                                placeholder="To"
                                className="border border-secondary  px-4 py-2"
                              />
                            </div>
                          </div>
                        )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
