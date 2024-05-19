"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";
import { useState } from "react";

const PRICE_OPTIONS = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];


const CATEGORY_OPTIONS = [
  {
    id: 1,
    label: "Design",
    value: "design",
  },

  {
    id: 3,
    label: "Development",
    value: "development",
  },
  {
    id: 4,
    label: "Marketing",
    value: "marketing",
  },
  {
    id: 5,
    label: "IT & Software",
    value: "it-software",
  },
  {
    id: 6,
    label: "Personal Development",
    value: "personal-development",
  },
  {
    id: 7,
    label: "Business",
    value: "business",
  },
  {
    id: 8,
    label: "Photography",
    value: "photography",
  },
  {
    id: 9,
    label: "Music",
    value: "music",
  },
];



const FilterCourseMobile = () => {
  const [filter, setFilter] = useState({
    categories: ["development"],
    price: ["free"],
    sort: "",
  });

  //   apply checkbox filter
  const applyArrayFilter = ({ type, value }) => {
    const isFilterApplied = filter[type].includes(value);

    if (isFilterApplied) {
      setFilter((prev) => ({
        ...prev,
        [type]: prev[type].filter((v) => v !== value),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [type]: [...prev[type], value],
      }));
    }
  };
  return (
    <div className="lg:hidden">
    <Sheet>
      <SheetTrigger>
        <Filter className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Filter Courses</SheetTitle>
          <Accordion defaultValue={["categories"]} type="multiple">
            {/* Categories filter */}
            <AccordionItem value="categories">
              <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">
                  Categories
                </span>
              </AccordionTrigger>

              <AccordionContent className="pt-6 animate-none">
                <ul className="space-y-4">
                  {CATEGORY_OPTIONS.map((option, optionIdx) => (
                    <li
                      key={option.value}
                      className="flex items-center"
                    >
                      <Checkbox
                        type="checkbox"
                        id={`category-${optionIdx}`}
                        onCheckedChange={() => {
                          applyArrayFilter({
                            type: "categories",
                            value: option.value,
                          });
                        }}
                        checked={filter.categories.includes(
                          option.value
                        )}
                      />
                      <label
                        htmlFor={`category-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600 cursor-pointer"
                      >
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            {/* Price filter */}
            <AccordionItem value="price">
              <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
                <span className="font-medium text-gray-900">Price</span>
              </AccordionTrigger>

              <AccordionContent className="pt-6 animate-none">
                <ul className="space-y-4">
                  {PRICE_OPTIONS.map((option, optionIdx) => (
                    <li
                      key={option.value}
                      className="flex items-center"
                    >
                      <Checkbox
                        type="checkbox"
                        id={`price-${optionIdx}`}
                        onCheckedChange={() => {
                          applyArrayFilter({
                            type: "price",
                            value: option.value,
                          });
                        }}
                        checked={filter.price.includes(option.value)}
                      />
                      <label
                        htmlFor={`price-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600 cursor-pointer"
                      >
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
  )
}

export default FilterCourseMobile